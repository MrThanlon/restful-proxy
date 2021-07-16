# restful-proxy

[![Node.js CI](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml/badge.svg)](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml)

可能是最优雅的 RESTful HTTP 客户端。

[English](https://github.com/MrThanlon/restful-proxy/blob/master/README.md)

## 1秒上手！

```javascript
// GET /user/profile/avatar
let res = await restful.user.profile.avatar('get');

// POST /user/profile with data
res = await restful.user.profile('post', {name: 'mrthanlon'});

// DELETE /post/me/lastyear
res = await restful.post.me.lastyear('delete');
```

我们提供了一个`request`函数用于封装XMLHttpRequest，当然你也可以使用自己的回调函数：

```javascript
restful.requestCallback = (method, url, data) => {
  console.log(method, url, data);
}
```

你可以这样设置`baseURL`:

```javascript
restful.options = {
  baseURL: 'http://example.com'
};
```

或者你也可以与[axios](https://github.com/axios/axios)一起使用。（见下文）

## 安装

使用 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/restful-proxy/dist/bundle.js"></script>
```

使用npm:

```shell
npm install restful-proxy
```

## 在Node.js中使用

我们没有提供Node.js环境下的HTTP客户端，所以我们建议与[axios](https://github.com/axios/axios)一起使用:

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

在交互式环境（REPL）中，由于可能会在键入时自动运行，可能导致URL错误，所以不建议在交互式环境中使用。

## License

[MIT](https://github.com/MrThanlon/restful-proxy/blob/master/LICENSE)
