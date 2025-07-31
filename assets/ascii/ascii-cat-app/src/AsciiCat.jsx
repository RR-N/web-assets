import React, { useState, useEffect, useRef } from 'react';
import AsciiText from './AsciiText';

const YT_IDS = [
  "9D2-iu9Ms-A","11mqSLKps7s","ufnhwRwzACo",
  "qh8VmhR8NPs","55jy4jqWEVo","gnEy-4zjYQI",
  "vD8jLGGQeAI","MsYnCKIDg4s",
  "7TCIul9eP50","OwerV0bpXIk","po1f3tD-d7g"
];

const FRAMES_LR = [
  ' /\\_/\\\n( o.o )\n > ^ <',
  ' /\\_/\\\n( OwO )\n > ^ <'
];
const WAIT_FRAME = ' /\\_/\\\n( -.- )\n > ^ <';

export default function AsciiCat() {
  const [frame, setFrame] = useState(FRAMES_LR[0]);
  const [dir, setDir] = useState(1);          // 1 right, -1 left
  const [x, setX] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [videoId, setVideoId] = useState(null);
  const container = useRef(null);

  /* walking animation */
  useEffect(() => {
    if (!playing) return;
    const tick = setInterval(() => {
      setFrame(f => FRAMES_LR[(FRAMES_LR.indexOf(f) + 1) % FRAMES_LR.length]);
      setX(prev => {
        const next = prev + dir * 4;          // speed 4 px / tick
        const max = (container.current?.offsetWidth || 300) - 160;
        if (next <= 0 || next >= max) setDir(d => -d);
        return Math.max(0, Math.min(next, max));
      });
    }, 120);                                  // change 8–9× per sec
    return () => clearInterval(tick);
  }, [playing, dir]);

  /* click handler: pause, show wait pose, pick random video */
  const handleClick = () => {
    setPlaying(false);
    setFrame(WAIT_FRAME);
    const id = YT_IDS[Math.floor(Math.random() * YT_IDS.length)];
    setTimeout(() => setVideoId(id), 600);    // slight pause before embed
  };

  /* when iframe loads, resume walking */
  const onIframeLoad = () => {
    setPlaying(true);
  };

  return (
    <div ref={container} style={{position:'relative', width:'100%', minHeight:'260px', cursor:'pointer'}} onClick={handleClick}>
      <div style={{position:'absolute', transform:`translateX(${x}px)`}}>
        <AsciiText text={frame} asciiFontSize={8} textFontSize={80} planeBaseHeight={5} enableWaves={false} />
      </div>
      {videoId && (
        <div style={{marginTop:'170px', display:'flex', justifyContent:'center'}}>
          <iframe
            width="560" height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={onIframeLoad}
          />
        </div>
      )}
    </div>
  );
}
