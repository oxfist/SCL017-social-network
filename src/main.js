const changeRoute = (hash) => {
  console.log(`cambiar a ruta seleccionada ${hash}`);
};

window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
});
