'use strict';

const restfulObject = () => { };
restfulObject.requestCallback = (input, init) => fetch(input, init);
restfulObject.url = [];
restfulObject.options = {
    baseURL: ''
};

const handler = {
    get(target, property) {
        target.url.push(property);
        return new Proxy(target, handler);
    },
    set(target, property, value) {
        target[property] = value;
        target.url = [];
        return true;
    },
    apply(target, thisArg, argumentList) {
        const baseURL = target.options.baseURL || '/';
        const lastChar = baseURL[baseURL.length - 1];
        const url = baseURL + (lastChar === '/' ? '' : '/') + target.url.slice(0, -1).join('/');
        const method = target.url[target.url.length - 1].toUpperCase();
        target.url = [];
        return target.requestCallback(url, {
            method,
            ...argumentList[0]
        });
    }
};

export default new Proxy(restfulObject, handler);
