var assert = require('assert');

assert.strictEqual(1, 1, '预期严格相等')
assert.notStrictEqual(1, true, '预期严格不相等')

// 抛出的错误符合某个构造函数
assert.throws(
  function(){
    throw new Error('Wrong value');
  },
  Error,
  '不符合预期的错误类型'
)

// 抛出错误的提示信息符合正则表达式
assert.throws(
  function(){
    throw new Error('Wrong value');
  },
  /value/,
  '不符合预期的错误类型'
)

// 抛出的错误符合自定义函数的校验
assert.throws(
  function(){
    throw new Error('Wrong value');
  },
  function(err){
    if( (err instanceof Error) && /value/.test(err)){
      return true;
    }
  },
  '不符合预期的错误类型'
)
