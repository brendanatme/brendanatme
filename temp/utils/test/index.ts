import { expect } from 'chai';
import {
  alphaSort,
  camelCase,
  capitalize,
  classCase,
  contains,
  decorate,
  doOnce,
  getLastInPath,
  includes,
  mapArrayToObject,
  mergeArrays,
  singularize,
  timer,
} from '../src';

describe('utils', () => {
  it(`exposes 'alphaSort' method`, () => {
    expect(alphaSort).to.be.a('function');
  });

  it(`exposes 'camelCase' method`, () => {
    expect(camelCase).to.be.a('function');
  });

  it(`exposes 'capitalize' method`, () => {
    expect(capitalize).to.be.a('function');
  });

  it(`exposes 'classCase' method`, () => {
    expect(classCase).to.be.a('function');
  });
  
  it(`exposes 'contains' method`, () => {
    expect(contains).to.be.a('function');
  });

  it(`exposes 'decorate' method`, () => {
    expect(decorate).to.be.a('function');
  });

  it(`exposes 'doOnce' method`, () => {
    expect(doOnce).to.be.a('function');
  });

  it(`exposes 'getLastInPath' method`, () => {
    expect(getLastInPath).to.be.a('function');
  });

  it(`exposes 'includes' method`, () => {
    expect(includes).to.be.a('function');
  });

  it(`exposes 'mapArrayToObject' method`, () => {
    expect(mapArrayToObject).to.be.a('function');
  });

  it(`exposes 'mergeArrays' method`, () => {
    expect(mergeArrays).to.be.a('function');
  });
  
  it(`exposes 'singularize' method`, () => {
    expect(singularize).to.be.a('function');
  });

  it(`exposes 'timer' method`, () => {
    expect(timer).to.be.an('object');
  });
});
