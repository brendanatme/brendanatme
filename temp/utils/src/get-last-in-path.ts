/**
 * utils/get-last-in-path
 */
export default (s: string): string => s.substring(s.lastIndexOf('/') + 1);
