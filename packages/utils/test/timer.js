import { expect } from 'chai';
import * as timer from '../src/timer';

const TEST_ID = 'TEST_ID'

describe('timer', () => {
  const start = timer.start(TEST_ID)
  const stop = timer.stop(TEST_ID)
  
  describe('start', () => {
    it('sets a start time in ms', () => {
      expect(start).to.be.a('number');
    });
  })

  describe('stop', () => {
    it('logs a message with the passage of time', () => {
      expect(stop).to.be.a('string');
    });
  })
});
