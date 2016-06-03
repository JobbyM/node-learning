var path = require('path');
console.log(path.join(__dirname,'foo'));

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));

console.log(path.resolve('/foo/bar', './baz'));

console.log(path.resolve('/foo/bar', '/tmp/file/'));

console.log(path.resolve('wwwroot','static_files/png/','../gif/image.gif'));
