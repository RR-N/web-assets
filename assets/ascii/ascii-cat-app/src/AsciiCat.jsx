import React, { useState, useEffect, useRef } from 'react';
import AsciiText from './AsciiText';

const IDS = [
  '9D2-iu9Ms-A','11mqSLKps7s','ufnhwRwzACo','qh8VmhR8NPs',
  '55jy4jqWEVo','gnEy-4zjYQI','vD8jLGGQeAI','MsYnCKIDg4s',
  '7TCIul9eP50','OwerV0bpXIk','po1f3tD-d7g'
];

const STEPS = [
  ' /\\_/\\\n( o.o )\n > ^ <',
  ' /\\_/\\\n( OwO )\n > ^ <'
];
const WAIT = ' /\\_/\\\n( -.- )\n > ^ <';

export default function AsciiCat () {
  const box = useRef(null);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [x, setX] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [vid, setVid] = useState(null);

  /* walk */
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setStep(s => (s + 1) % STEPS.length);
      setX(px => {
        const max = (box.current.offsetWidth || 300) - 160;
        const nx = px + dir * 4;
        if (nx <= 0 || nx >= max) setDir(d => -d);
        return Math.max(0, Math.min(nx, max));
      });
    }, 120);
    return () => clearInterval(t);
  }, [playing, dir]);

  /* click → pause + video */
  const click = () => {
    setPlaying(false);
    setStep(undefined);     // show WAIT frame
    const id = IDS[Math.random() * IDS.length | 0];
    setTimeout(() => setVid(id), 500);
  };
  const resume = () => setPlaying(true);

  const frame = step === undefined ? WAIT : STEPS[step];

  return (
    <div
      ref={box}
      onClick={click}
      style={{ position: 'relative', width: '100%', minHeight: '260px', cursor: 'pointer' }}
    >
      <div style={{ position: 'absolute', transform: `translateX(${x}px)` }}>
        <AsciiText
          text={frame}
          asciiFontSize={8}
          textFontSize={80}
          planeBaseHeight={5}
          enableWaves={false}
        />
      </div>

      {vid && (
        <div style={{ marginTop: '170px', display: 'flex', justifyContent: 'center' }}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={resume}
          />
        </div>
      )}
    </div>
  );
}
