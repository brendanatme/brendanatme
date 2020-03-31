/**
 * utils/map-array-to-object
 * 
 * @return {any} mapped object
 */
type genericObject = { [key: string]: any };

export default (arr: genericObject[], key: string) => {
  const obj: genericObject = {};

  arr.map((item: any) => {
    obj[item[key]] = item;
  });

  return obj;
};
