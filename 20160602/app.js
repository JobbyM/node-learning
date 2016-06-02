var url = require('url');

console.log(url.resolve('/one/two/three','four'));
// '/one/two/four'

console.log(url.resolve('http://example.com/','/one'));
// 'http://example.com/one'

console.log(url.resolve('http://example.com/one/','two'));
// 'http://example.com/one/two'

console.log(url.resolve('http://example.com/one/three/','/two'));
// 'http://example.com/two'
