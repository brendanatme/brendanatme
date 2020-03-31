import { expect } from 'chai';
import includes from '../src/includes';

describe('includes', () => {
  it('returns `true` when needle is found in haystack', () => {
    expect(includes(['high', 'levels', 'of', 'dank'], 'dank')).to.equal(true);
  });

  it('returns `false` when needle is not found in haystack', () => {
    expect(includes(['high', 'levels', 'of', 'dank'], 'country music')).to.equal(false);
  });
});
