/* src/index.jsx – final “just-work” bootstrap */
console.log('ASCII-cat bundle build 13');

import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiCat from './AsciiCat';

function mount(el) {
  createRoot(el).render(<AsciiCat />);
  console.log('[mount] reacted on:', el);
  /* live size log – remove once confirmed */
  setInterval(() => {
    const r = el.getBoundingClientRect();
    console.log(`[react-target] ${Math.round(r.width)}×${Math.round(r.height)}`);
  }, 1000);
}

(function ensureContainer() {
  let el = document.getElementById('react-target');
  if (!el) {
    /* create one at end of <body> */
    el = document.createElement('div');
    el.id = 'react-target';
    el.style.cssText = 'position:relative;width:100%;min-height:320px;';
    document.body.appendChild(el);
    console.log('[ensureContainer] created #react-target');
  } else {
    /* make sure it’s visible */
    if (!el.style.height && !el.style.minHeight) {
      el.style.minHeight = '320px';
      console.log('[ensureContainer] added min-height to existing div');
    }
  }
  mount(el);
})();
