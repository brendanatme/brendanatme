/**
 * doOnce
 * 
 * wrap a function so it is only called once
 * 
 * @param cb function to call once
 * @returns function
 */
export default (cb) => {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      cb(...args);
    }
  };
};
