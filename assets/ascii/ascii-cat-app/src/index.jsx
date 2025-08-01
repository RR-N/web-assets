/* src/index.jsx */
console.log('ASCII-cat bundle version 10');

import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiCat from './AsciiCat';

function boot(el) {
  createRoot(el).render(<AsciiCat />);
}

function tryMount() {
  const el = document.getElementById('react-target');
  if (el) {
    boot(el);
    return true;
  }
  return false;
}

if (!tryMount()) {
  /* Wait until Webflow actually injects the Embed */
  const obs = new MutationObserver(() => {
    if (tryMount()) obs.disconnect();
  });
  obs.observe(document.body, { childList: true, subtree: true });
}
