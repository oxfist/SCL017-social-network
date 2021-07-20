// 1. Mostrar HTML después de seleccionar un link (navegación)
//   1.1 Reemplazar contenido de div con id root
//   1.2 Cambiar URL para que no ocupe el '#'
// 2. Mostrar HTML correcto al recargar la página
// 3. Mostrar HTML correcto al moverse con botones Atrás y Adelante del navegador

import { homeContent } from './views/home.js';
import { aboutContent } from './views/about.js';
import { router } from './lib/router.js';

const routes = {
  '#home': homeContent,
  '#about': aboutContent,
};
const rootDiv = document.getElementById('root');

const currentPath = window.location.pathname;
if (currentPath === '/') {
  rootDiv.innerHTML = homeContent;
} else if (currentPath === '/about') {
  rootDiv.innerHTML = aboutContent;
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  router.changeRoute(hash);
  rootDiv.innerHTML = routes[hash];
});

window.onpopstate = () => {
  if (window.location.pathname === '/') {
    rootDiv.innerHTML = homeContent;
  } else if (window.location.pathname === '/about') {
    rootDiv.innerHTML = aboutContent;
  }
};
