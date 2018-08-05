import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Fetch from '../source/_modules/fetchModule/fetch';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Fetch function', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exist fetch', () =>{
      expect(Fetch).to.exist;
    });

    it('should expect that Fetch is an instance', () => {
      expect(new Fetch()).to.be.an.instanceof(Fetch);
    });
  });

  describe('Main', () => {
    it('should expect that fetch has been called once', () => {
      let newFetch = new Fetch();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should expect to have been called with the correct URL', () => {
      let newFetch = new Fetch();
      expect(fetchedStub).to.have.been
        .calledWith('https://5b6264dd07412d00142acf61.mockapi.io/api/v1/cars')
    });
  });
});