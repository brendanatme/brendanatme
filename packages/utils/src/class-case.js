import camelCase from './camel-case';
import capitalize from './capitalize';

export default (str) => capitalize(camelCase(str));
