console.log('ASCII-cat bundle – text mode');

import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiCat from './AsciiCat';

function mount() {
  let el = document.getElementById('react-target');
  if (!el) {
    el = document.createElement('div');
    el.id = 'react-target';
    el.style.cssText = 'position:relative;width:100%;min-height:320px;';
    document.body.appendChild(el);
  }
  createRoot(el).render(<AsciiCat />);
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', mount, { once:true });
} else {
  mount();
}
