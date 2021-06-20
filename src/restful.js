'use strict';

const restfulObject = () => {};
restfulObject.requestCallback = require('./request');
restfulObject.url = '';
restfulObject.options = {
  baseURL: ''
};

const handler = {
  get(target, property) {
    target.url += `/${property}`;
    return new Proxy(target, handler);
  },
  set(target, property, value) {
    target[property] = value;
    target.url = '';
    return true;
  },
  apply(target, thisArg, argumentList) {
    const url = target.options.baseURL + target.url;
    target.url = '';
    return target.requestCallback(argumentList[0], url, argumentList[1]);
  }
};

module.exports = new Proxy(restfulObject, handler);
