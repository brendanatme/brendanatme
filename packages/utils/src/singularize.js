/**
 * singularize
 * 
 * takes a plural word and removes trailing 's'
 * 
 * @param {string}
 * @returns {string}
 */
export default (str) => str.replace(/s$/, '');
