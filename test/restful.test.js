const restful = require('../src/restful')
restful.requestCallback = (method, url, data) => {
  return {
    method, url, data
  }
}

test('GET /user/profile/avatar', () => {
  expect(restful.user.profile.avatar('get')).toStrictEqual({
    method: 'get',
    url: '/user/profile/avatar',
    data: undefined
  });
});

test('POST /user/profile with {name: \'mrthanlon\'}', () => {
  expect(restful.user.profile('post', {name: 'mrthanlon'})).toStrictEqual({
    method: 'post',
    url: '/user/profile',
    data: {name: 'mrthanlon'}
  });
});

test('DELETE /post/me/lastyear', () => {
  expect(restful.post.me.lastyear('delete')).toStrictEqual({
    method: 'delete',
    url: '/post/me/lastyear',
    data: undefined
  });
});

test('PUT /app/user/profile', () => {
  expect(restful.app.user.profile('put')).toStrictEqual({
    method: 'put',
    url: '/app/user/profile',
    data: undefined
  });
});

test('GET /app/user/post/get/apply', () => {
  expect(restful.app.user.post.get.apply('get')).toStrictEqual({
    method: 'get',
    url: '/app/user/post/get/apply',
    data: undefined
  });
});
