/* eslint-disable */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/* ---------- GLSL Shaders ---------- */
const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;
void main() {
  vUv = uv;
  float time = uTime * 5.;
  float waveFactor = uEnableWaves;
  vec3 transformed = position;
  transformed.x += sin(time + position.y) * 0.5 * waveFactor;
  transformed.y += cos(time + position.z) * 0.15 * waveFactor;
  transformed.z += sin(time + position.x) * waveFactor;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}`;

const fragmentShader = `
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;
void main() {
  float time = uTime;
  vec2 pos = vUv;
  float move = sin(time + mouse) * 0.01;
  float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
  float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
  float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
  float a = texture2D(uTexture, pos).a;
  gl_FragColor = vec4(r, g, b, a);
}`;

/* ---------- Helper: map ---------- */
Math.map = (n, start, stop, start2, stop2) =>
  ((n - start) / (stop - start)) * (stop2 - start2) + start2;

/* ---------- AsciiFilter (canvas → ASCII) ---------- */
class AsciiFilter {
  constructor(renderer, { fontSize = 12, fontFamily = "'Courier New', monospace", charset, invert = true } = {}) {
    this.renderer = renderer;
    this.domElement = document.createElement('div');
    Object.assign(this.domElement.style, { position: 'absolute', inset: 0 });
    this.pre = document.createElement('pre');
    this.domElement.appendChild(this.pre);
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.domElement.appendChild(this.canvas);
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.charset =
      charset ??
      " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
    this.invert = invert;
  }
  setSize(w, h) {
    this.width = w;
    this.height = h;
    this.renderer.setSize(w, h);
    this.canvas.width = Math.floor(w / (this.fontSize * 0.6));
    this.canvas.height = Math.floor(h / this.fontSize);
    this.context.font = `${this.fontSize}px ${this.fontFamily}`;
    Object.assign(this.pre.style, {
      fontFamily: this.fontFamily,
      fontSize: `${this.fontSize}px`,
      margin: 0,
      padding: 0,
      lineHeight: '1em',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      mixBlendMode: 'difference'
    });
  }
  render(scene, camera) {
    this.renderer.render(scene, camera);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.renderer.domElement, 0, 0, this.canvas.width, this.canvas.height);
    const { data } = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    let out = '';
    const len = data.length;
    for (let i = 0; i < len; i += 4) {
      const idx = i / 4;
      const gray = (0.3 * data[i] + 0.6 * data[i + 1] + 0.1 * data[i + 2]) / 255;
      const row = Math.floor(idx / this.canvas.width);
      const col = idx % this.canvas.width;
      const charIdx = Math.floor((this.invert ? gray : 1 - gray) * (this.charset.length - 1));
      out += this.charset[charIdx];
      if (col === this.canvas.width - 1) out += '\n';
    }
    this.pre.textContent = out;
  }
}

/* ---------- CanvasTxt (renders text to texture) ---------- */
class CanvasTxt {
  constructor(txt, opts = {}) {
    this.txt = txt;
    this.fontSize = opts.fontSize ?? 200;
    this.color = opts.color ?? '#fdf9f3';
    this.fontFamily = opts.fontFamily ?? 'IBM Plex Mono';
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.font = `${this.fontSize}px ${this.fontFamily}`;
    this.resize();
  }
  resize() {
    this.ctx.font = this.font;
    const m = this.ctx.measureText(this.txt);
    this.canvas.width = m.width + 20;
    this.canvas.height = this.fontSize + 20;
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.font = this.font;
    this.ctx.fillText(this.txt, 10, this.fontSize);
  }
  get texture() { return this.canvas; }
}

/* ---------- CanvAscii (Three scene + AsciiFilter) ---------- */
class CanvAscii {
  constructor(params, container, w, h) {
    Object.assign(this, params);
    this.container = container; this.w = w; this.h = h;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
    this.camera.position.z = 30;

    this.txtCanvas = new CanvasTxt(this.text, {
      fontSize: this.textFontSize,
      color: this.textColor
    });
    this.txtCanvas.render();
    this.texture = new THREE.CanvasTexture(this.txtCanvas.texture);
    this.texture.minFilter = THREE.NearestFilter;

    const aspect = this.txtCanvas.canvas.width / this.txtCanvas.canvas.height;
    const planeGeo = new THREE.PlaneGeometry(this.planeBaseHeight * aspect, this.planeBaseHeight, 36, 36);
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: this.texture },
        mouse: { value: 1 },
        uEnableWaves: { value: this.enableWaves ? 1 : 0 }
      }
    });
    this.mesh = new THREE.Mesh(planeGeo, mat);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    this.renderer.setPixelRatio(1);
    this.filter = new AsciiFilter(this.renderer, { fontSize: this.asciiFontSize });
    container.appendChild(this.filter.domElement);
    this.setSize(w, h);
  }
  setSize(w, h) {
    this.w = w; this.h = h;
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.filter.setSize(w, h);
  }
  animate = () => {
    this.frame = requestAnimationFrame(this.animate);
    this.txtCanvas.render();
    this.texture.needsUpdate = true;
    this.mesh.material.uniforms.uTime.value = Math.sin(Date.now() * 0.001);
    this.filter.render(this.scene, this.camera);
  };
  start() { this.animate(); }
  dispose() { cancelAnimationFrame(this.frame); }
}

/* ---------- React wrapper ---------- */
export default function AsciiText({
  text = 'Hello!',
  asciiFontSize = 8,
  textFontSize = 200,
  textColor = '#fdf9f3',
  planeBaseHeight = 8,
  enableWaves = true
}) {
  const ref = useRef(null);
  const ascii = useRef(null);
  useEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect();
    ascii.current = new CanvAscii(
      { text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves },
      ref.current,
      width,
      height
    );
    ascii.current.start();
    const ro = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      ascii.current.setSize(w, h);
    });
    ro.observe(ref.current);
    return () => { ro.disconnect(); ascii.current.dispose(); };
  }, [text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves]);
  return <div ref={ref} style={{position:'absolute', inset:0}} />;
}
