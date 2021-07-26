// 1. Mostrar HTML después de seleccionar un link (navegación)
//   1.1 Reemplazar contenido de div con id root
//   1.2 Cambiar URL para que no ocupe el '#'
// 2. Mostrar HTML correcto al recargar la página
// 3. Mostrar HTML correcto al moverse con botones Atrás y Adelante del navegador

const rootDiv = document.getElementById('root');

const homeContent = '<h1>Inicio</h1>';
const aboutContent = '<h1>Acerca de</h1>';

// Mostrar HTML correcto al recargar página (2)
const currentPath = window.location.pathname;
if (currentPath === '/') {
  rootDiv.innerHTML = homeContent;
} else if (currentPath === '/about') {
  rootDiv.innerHTML = aboutContent;
}

// Cambiar ruta en la URL para que no use "#", ej. "/#about" por "/about" (1.2)
const changeRoute = (hash) => {
  if (hash === '#home') {
    window.history.replaceState({}, 'home', '/');
  } else if (hash === '#about') {
    window.history.replaceState({}, 'about', '/about');
  }
};

// Cambiar HTML al clickear links (1)
window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
  if (hash === '#home') {
    console.log('mostrar home');
    rootDiv.innerHTML = homeContent;
  } else if (hash === '#about') {
    console.log('mostrar about');
    rootDiv.innerHTML = aboutContent;
  }
});

// Manejar botones Atrás y Adelante (3)
window.onpopstate = () => {
  if (window.location.pathname === '/') {
    rootDiv.innerHTML = homeContent;
  } else if (window.location.pathname === '/about') {
    rootDiv.innerHTML = aboutContent;
  }
};
