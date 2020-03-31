/**
 * mergeArrays
 * 
 * flatten an array of arrays
 * 
 * @param  {...any} args 
 * @returns {any[]}
 */
export default (...args) => args.reduce((acc, val) => [...acc, ...val]);
