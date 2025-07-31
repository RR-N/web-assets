import React from 'react';
import { createRoot } from 'react-dom/client';
import AsciiCat from './AsciiCat';

function mount() {
  const rootEl = document.getElementById('react-target');
  if (rootEl) createRoot(rootEl).render(<AsciiCat />);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
