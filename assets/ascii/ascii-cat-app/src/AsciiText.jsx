/* eslint-disable */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/* ── GLSL shaders ── */
const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uEnableWaves;
void main() {
  vUv = uv;
  float t = uTime * 5.;
  vec3 p = position;
  if (uEnableWaves > 0.5) {
    p.x += sin(t + position.y) * 0.5;
    p.y += cos(t + position.z) * 0.15;
    p.z += sin(t + position.x);
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;
void main() {
  float t = uTime;
  vec2 pos = vUv;
  float r = texture2D(uTexture, pos + cos(t*2. - t + pos.x) * .01).r;
  float g = texture2D(uTexture, pos + tan(t*.5 + pos.x - t) * .01).g;
  float b = texture2D(uTexture, pos - cos(t*2. + t + pos.y) * .01).b;
  float a = texture2D(uTexture, pos).a;
  gl_FragColor = vec4(r, g, b, a);
}`;

/* ── AsciiFilter ── */
class AsciiFilter {
  constructor(renderer, {
    fontSize = 12,
    fontFamily = "'Courier New', monospace",
    invert = true,
    charset
  } = {}) {
    this.renderer = renderer;

    this.canvas = document.createElement('canvas');
    this.ctx    = this.canvas.getContext('2d');
    this.pre    = document.createElement('pre');
    this.dom    = document.createElement('div');
    Object.assign(this.dom.style, { position: 'absolute', inset: 0 });
    this.dom.append(this.pre, this.canvas);

    this.fontSize   = fontSize;
    this.fontFamily = fontFamily;
    this.charset =
      charset ??
      " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
    this.invert = invert;
  }

  setSize(w, h) {
    this.canvas.width  = Math.floor(w / (this.fontSize * 0.6));
    this.canvas.height = Math.floor(h /  this.fontSize);
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;

    Object.assign(this.pre.style, {
      margin: 0,
      padding: 0,
      lineHeight: '1em',
      mixBlendMode: 'normal',     // ← solid colour
      color: '#000',              // ← black text
      fontFamily: this.fontFamily,
      fontSize: `${this.fontSize}px`,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    });
  }

  render(scene, camera) {
    this.renderer.render(scene, camera);

    const gl = this.renderer.domElement;
    const w  = this.canvas.width;
    const h  = this.canvas.height;
    const gw = gl.clientWidth  || gl.width;
    const gh = gl.clientHeight || gl.height;
    if (!w || !h || !gw || !gh) return;

    try { this.ctx.drawImage(gl, 0, 0, w, h); }
    catch { return; }

    let data;
    try { data = this.ctx.getImageData(0, 0, w, h).data; }
    catch { return; }

    let out = '';
    for (let i = 0, len = data.length; i < len; i += 4) {
      const idx  = i / 4;
      const col  = idx % w;
      const gray = (0.3 * data[i] + 0.6 * data[i+1] + 0.1 * data[i+2]) / 255;
      const cIdx = Math.floor((this.invert ? gray : 1 - gray) * (this.charset.length - 1));
      out += this.charset[cIdx];
      if (col === w - 1) out += '\n';
    }
    this.pre.textContent = out;
  }
}

/* ── CanvasTxt ── */
class CanvasTxt {
  constructor(txt, { fontSize = 200, color = '#fdf9f3', fontFamily = 'IBM Plex Mono' } = {}) {
    this.txt = txt;
    this.fontSize = fontSize;
    this.color = color;
    this.fontFamily = fontFamily;

    this.canvas = document.createElement('canvas');
    this.ctx    = this.canvas.getContext('2d');
    this.font   = `${this.fontSize}px ${this.fontFamily}`;
    this.resize();
  }
  resize() {
    this.ctx.font = this.font;
    const m = this.ctx.measureText(this.txt);
    this.canvas.width  = m.width + 20;
    this.canvas.height = this.fontSize + 20;
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.font      = this.font;
    this.ctx.fillText(this.txt, 10, this.fontSize);
  }
  get texture() { return this.canvas; }
}

/* ── CanvAscii ── */
class CanvAscii {
  constructor(params, el, w, h) {
    Object.assign(this, params);
    this.el = el;

    this.scene  = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
    this.camera.position.z = 30;

    this.txt = new CanvasTxt(this.text, { fontSize: this.textFontSize, color: this.textColor });
    this.txt.render();
    this.tex = new THREE.CanvasTexture(this.txt.texture);
    this.tex.minFilter = THREE.NearestFilter;

    const aspect = this.txt.canvas.width / this.txt.canvas.height;
    const geo    = new THREE.PlaneGeometry(this.planeBaseHeight * aspect, this.planeBaseHeight, 36, 36);
    const mat    = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime:        { value: 0 },
        uTexture:     { value: this.tex },
        uEnableWaves: { value: this.enableWaves ? 1 : 0 }
      }
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    this.renderer.setPixelRatio(1);
    this.filter = new AsciiFilter(this.renderer, { fontSize: this.asciiFontSize });
    el.appendChild(this.filter.dom);

    this.setSize(w, h);
    this.animate();
  }

  setSize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.filter.setSize(w, h);
  }

  animate = () => {
    const loop = () => {
      this.frame = requestAnimationFrame(loop);
      const { width: w, height: h } = this.el.getBoundingClientRect();
      if (!w || !h) return;

      this.txt.render();
      this.tex.needsUpdate = true;
      this.mesh.material.uniforms.uTime.value = Math.sin(Date.now() * 0.001);
      this.filter.render(this.scene, this.camera);
    };
    loop();
  };
  dispose() { cancelAnimationFrame(this.frame); }
}

/* ── React wrapper ── */
export default function AsciiText({
  text            = 'Hello!',
  asciiFontSize   = 8,
  textFontSize    = 200,
  textColor       = '#fdf9f3',
  planeBaseHeight = 8,
  enableWaves     = true
}) {
  const ref  = useRef(null);
  const inst = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const make = (w, h) => (
      inst.current = new CanvAscii(
        { text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves },
        el, w, h
      ),
      () => inst.current.dispose()
    );

    const rect = el.getBoundingClientRect();
    if (rect.width && rect.height) return make(rect.width, rect.height);

    const ro = new ResizeObserver(([e]) => {
      const { width: w, height: h } = e.contentRect;
      if (w && h) { ro.disconnect(); make(w, h); }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, asciiFontSize, textFontSize, textColor, planeBaseHeight, enableWaves]);

  return <div ref={ref} style={{ position: 'absolute', inset: 0 }} />;
}
