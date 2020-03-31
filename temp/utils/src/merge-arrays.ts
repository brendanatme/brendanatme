/**
 * utils/merge-arrays
 * 
 * flatten an array of arrays
 * 
 * @param  {...any[][]} args 
 * @returns {any[]}
 */
export default (...args: any[][]): any[] => args.reduce((acc, val) => [...acc, ...val]);
