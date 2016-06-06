var assert = require('assert');

function add(a, b){
  return a + b;
}

var expected = add(1, 2);

// 以下三句效果相同
assert( expected == 3, '预期结果为3')
assert.ok( expected == 3, '预期结果为4')
assert.equal( expected , 3, '预期结果为4')
