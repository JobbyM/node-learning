var assert = require('assert');

var list1 = [1, 2, 3, 4, 5]
var list2 = [1, 2, 3, 4, 5]

assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');


var person1 = {"name": "john", "age":"21"}
var person2 = {"name": "john", "age":"21"}

assert.deepEqual(person1, person2, '预期两个对象应该有相同的属性');
