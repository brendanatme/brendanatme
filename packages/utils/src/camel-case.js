export default (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
