const expect = require('chai').expect;
const react = require('react');
const reactDOM = require('react-dom');
const reactRouter = require('react-router');
const reactRedux = require('react-redux');
const reactReduxRouter = require('react-router-redux');
const reactReduxThunk = require('redux-thunk');

describe('REACT COMPONENTS', function(done) {
  it('react, react-dom, and react-router should be installed and running', function() {
    expect(react).to.be.an('object');
    expect(reactDOM).to.be.an('object');
    expect(reactRouter).to.be.an('object');
  });

  it('react and react-dom should be up to date with current version (15.14.2)', function() {
    expect(react.version).to.equal('15.4.2');
    expect(reactDOM.version).to.equal('15.4.2');
  });

  it('redux and redux-router should be installed and running', function() {
    expect(reactRedux).to.be.an('object');
    expect(reactReduxRouter).to.be.an('object');
  });

  it('redux thunk should be installed', function() {
    expect(reactReduxThunk).to.be.an('object');
  });
});
