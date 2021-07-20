export const router = {
  changeRoute: (hash) => {
    if (hash === '#home') {
      window.history.replaceState({}, 'home', '/');
    } else if (hash === '#about') {
      window.history.replaceState({}, 'about', '/about');
    }
  },
};
