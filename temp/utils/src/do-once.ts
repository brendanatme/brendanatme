/**
 * utils/do-one
 * 
 * wrap a function so it is only called once
 * 
 * @param cb function to call once
 * @returns function
 */
type genericFunction = (...args: any[]) => any;

export default (cb: genericFunction): genericFunction => {
  let called: boolean = false;

  return (...args: any[]): any => {
    if (!called) {
      called = true;
      return cb(...args);
    }

    return;
  };
};
