// 1. Mostrar HTML después de seleccionar un link (navegación)
//   1.1 Reemplazar contenido de div con id root
//   1.2 Cambiar URL para que no ocupe el '#'
// 2. Mostrar HTML correcto al recargar la página

const rootDiv = document.getElementById('root');

const changeRoute = (hash) => {
  if (hash === '#home') {
    rootDiv.innerHTML = '<h1>Inicio</h1>';
    console.log('mostrar home');
  } else if (hash === '#about') {
    rootDiv.innerHTML = '<h1>Acerca de</h1>';
    console.log('mostrar about');
  }
};

window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
});
