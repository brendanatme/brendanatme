/**
 * utils/timer
 *
 * utility to test execution time
 *
 * usage:
 *
 * start('id')
 *
 * ...
 *
 * stop('id')
 */
const _ids = {};
let _logger;

export const setLogger = (logFn) => {
  _logger = logFn;
};

export const start = (id) => {
  _ids[id] = +new Date();
  
  return _ids[id];
};

export const stop = (id) => {
  const result = (+new Date()) - _ids[id];
  const str = `Timer: execution of ${id} took ${result}ms`;

  _logger ? _logger(str) : console.log(str);

  delete _ids[id]

  return str;
};
