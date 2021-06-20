'use strict';

/**
 * Promise based HTTP client for browser
 * @param method {string}
 * @param url {string}
 * @param data {Object}
 * @return {Promise}
 */
function request(method, url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject()
      }
    }
    xhr.onerror = xhr.onabort = () => {
      reject()
    }
    if (data === undefined) {
      xhr.send()
    } else if (data instanceof FormData) {
      xhr.send(data)
    } else {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(data))
    }
  })
}

module.exports = request;
