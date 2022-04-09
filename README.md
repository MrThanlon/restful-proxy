# restful-proxy

[![Node.js CI](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml/badge.svg)](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml)

Probably the most elegant RESTful HTTP client.

[中文](https://github.com/MrThanlon/restful-proxy/blob/master/README_zh.md)

## One second to get started!

```javascript
// GET /user/profile/avatar
let res = await restful.user.profile.avatar.get();

// POST /user/profile with data
res = await restful.user.profile.post({
  body: JSON.stringify({ name: 'mrthanlon' })
});

// DELETE /post/me/lastyear
res = await restful.post.me.lastyear.delete();
```

By default we use fetch() to send the request, you can also use it with [axios](https://github.com/axios/axios) if you don't like fetch(), or you can also use your own callback function at:

```javascript
restful.requestCallback = (input, init) => {
  console.log(input, init);
}
```

You can set `baseURL` like this:

```javascript
restful.options = {
  baseURL: 'http://example.com'
};
```

## Installing

### Browser

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/restful-proxy/dist/restful.min.js"></script>
```

### Node.js & Webpack & Vite & rollup...

Using npm:

```shell
npm install restful-proxy
```

## Notice

In the interactive environment (REPL), since it may run automatically when typing, which may cause URL errors, it is not recommended to use it in an interactive environment.

## License

[MIT](https://github.com/MrThanlon/restful-proxy/blob/master/LICENSE)
