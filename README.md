# restful-proxy

Probably the most elegant RESTful HTTP client.

[中文](https://github.com/MrThanlon/restful-proxy/blob/master/README_zh.md)

## One second to get started!

```javascript
// GET /user/profile/avatar
let res = await restful.user.profile.avatar('get');

// POST /user/profile with data
res = await restful.user.profile('post', {name: 'mrthanlon'});

// DELETE /post/me/lastyear
res = await restful.post.me.lastyear('delete');
```

We provide a `request` function to encapsulate XMLHttpRequest, of course, you can also use your own callback function:

```javascript
restful.requestCallback = (method, url, data) => {
  console.log(method, url, data);
}
```

You can set `baseURL` like this:

```javascript
restful.options = {
  baseURL: 'http://example.com'
};
```

Or you can use it with [axios](https://github.com/axios/axios).(See below)

## Installing

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/restful-proxy/dist/bundle.js"></script>
```

Using npm:

```shell
npm install restful.js
```

## For node.js

We do not provide an HTTP client in the Node.js environment, so we recommend using it with [axios](https://github.com/axios/axios):

```javascript
const restful = require('restful');
const axios = require('axios').default;
restful.requestCallback = (method, url, data) => {
  return axios({
    method,
    url,
    data
  });
}
```

## Notice

In the interactive environment (REPL), since it may run automatically when typing, which may cause URL errors, it is not recommended to use it in an interactive environment.

## License

[MIT](https://github.com/MrThanlon/restful-proxy/blob/master/LICENSE)
