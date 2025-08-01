/* src/AsciiCat.jsx – Webflow-safe ASCII cat */
import React, { useEffect, useRef, useState } from 'react';

const FRAMES_RIGHT = [
` /\\_/\\
(  o.o)
~>  ^<  `,
` /\\_/\\
(  OwO)
~>  ^<  `
];

const FRAMES_LEFT = [
` /\\_/\\
(o.o  )
 >^  <~`,
` /\\_/\\
(OwO  )
 >^  <~`
];

const FRAME_WAIT = ` /\\_/\\
( -.- )
 > ^ < `;

const YT_IDS = [
  '9D2-iu9Ms-A','11mqSLKps7s','ufnhwRwzACo','qh8VmhR8NPs','55jy4jqWEVo',
  'gnEy-4zjYQI','vD8jLGGQeAI','MsYnCKIDg4s','shorts/7TCIul9eP50',
  'shorts/OwerV0bpXIk','shorts/po1f3tD-d7g'
];

export default function AsciiCat() {
  const codeRef = useRef(null);
  const [dir, setDir] = useState(1);        // 1 → right, -1 → left
  const [step, setStep] = useState(0);      // 0/1 alternate foot
  const [x, setX] = useState(0);            // px offset
  const [videoId, setVideoId] = useState(null);

  /* animation loop */
  useEffect(() => {
    const tick = () => {
      setStep(s => 1 - s);
      setX(px => {
        const next = px + dir * 6;          // speed ← adjust here
        if (next > 360) { setDir(-1); return 360; }
        if (next < 0)   { setDir(1);  return 0;   }
        return next;
      });
    };
    const id = setInterval(tick, 1000);     // one step per second
    return () => clearInterval(id);
  }, [dir]);

  /* click handler: show / replace YouTube iframe */
  function handleClick() {
    setVideoId(prev => {
      const pick = () => YT_IDS[Math.floor(Math.random()*YT_IDS.length)];
      return prev ? pick() : pick();        // always replace
    });
  }

  /* render */
  const frames = dir === 1 ? FRAMES_RIGHT : FRAMES_LEFT;
  const art = frames[step];
  return (
    <div style={{position:'relative',width:'100%',height:'100%'}} onClick={handleClick}>
      <code
        ref={codeRef}
        style={{
          position:'absolute',
          left:x,
          top:0,
          whiteSpace:'pre',
          fontFamily:'monospace',
          cursor:'pointer',
          userSelect:'none'
        }}
      >
        {art}
      </code>

      {videoId &&
        <div style={{marginTop:'6rem',textAlign:'center'}}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            width="560"
            height="315"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="cat-vid"
          />
        </div>}
    </div>
  );
}
