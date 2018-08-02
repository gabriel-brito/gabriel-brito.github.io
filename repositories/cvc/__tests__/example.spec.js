import chai, { expect } from 'chai';
import Example from '../source/_modules/example-module/example-module';

describe('Example', () => {

  describe('Example smoke test', () => {

    it('should expect Example to exist', () => {
      expect(Example).to.exist;
    });

  });
  
});