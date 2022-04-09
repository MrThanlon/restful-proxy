// mock fetch
global.fetch = (input, init) => ({ input, init });
const restful = require('../dist/restful.min.cjs');

test('GET /user/profile/avatar', () => {
    expect(restful.user.profile.avatar.get()).toStrictEqual({
        input: '/user/profile/avatar',
        init: {
          method: 'GET'
        }
    });
});

test('POST /user/profile with {name: \'mrthanlon\'}', () => {
    expect(restful.user.profile.post({
        body: JSON.stringify({ name: 'mrthanlon' })
    })).toStrictEqual({
        input: '/user/profile',
        init: {
          method: 'POST',
          body: JSON.stringify({ name: 'mrthanlon' })
        }
    });
});
