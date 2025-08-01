console.log('ASCII-cat bundle version 7'); 

setInterval(() => {
  const el = document.getElementById('react-target');
  if (el) {
    const r = el.getBoundingClientRect();
    console.log(`react-target size: ${r.width}×${r.height}`);
  }
}, 1000);


import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiCat from './AsciiCat';

function ready(){
  const el=document.getElementById('react-target');
  if(el)createRoot(el).render(<AsciiCat/>);
}
document.readyState==='loading'
  ? document.addEventListener('DOMContentLoaded',ready)
  : ready();
