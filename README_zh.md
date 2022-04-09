# restful-proxy

[![Node.js CI](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml/badge.svg)](https://github.com/MrThanlon/restful-proxy/actions/workflows/node.js.yml)

可能是最优雅的 RESTful HTTP 客户端。

[English](https://github.com/MrThanlon/restful-proxy/blob/master/README.md)

## 1秒上手！

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

我们默认使用fetch()发送请求，如果你不喜欢fetch()，也可以与[axios](https://github.com/axios/axios)一起使用，或者使用自己的回调函数：

```javascript
restful.requestCallback = (input, init) => {
  console.log(input, init);
}
```

你可以这样设置`baseURL`:

```javascript
restful.options = {
  baseURL: 'http://example.com'
};
```

## 安装

### 浏览器

使用 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/restful-proxy/dist/restful.min.js"></script>
```

### Node.js & Webpack & Vite & rollup...

使用npm:

```shell
npm install restful-proxy
```

## 注意

在交互式环境（REPL）中，由于可能会在键入时自动运行，可能导致URL错误，所以不建议在交互式环境中使用。

## License

[MIT](https://github.com/MrThanlon/restful-proxy/blob/master/LICENSE)
