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
export type LogMethod = (...args: string[]) => void

const _ids: { [key: string]: number } = {};
let _logger: LogMethod;

export const setLogger = (logFn: LogMethod): void => {
  _logger = logFn;
};

export const start = (id: string): void => {
  _ids[id] = +new Date();
};

export const stop = (id: string): void => {
  const result: number = (+new Date()) - _ids[id];
  const str: string = `Timer: execution of ${id} took ${result}ms`;

  _logger ? _logger(str) : console.log(str);

  delete _ids[id]
};
