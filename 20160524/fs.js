var fs = require('fs');

var text = fs.readFileSync('app.js', 'utf8');

// 方法一，查询现有的行结尾字符
// var EOL = text.indexOf('\r\n') >= 0 ? '\r\n' : '\n';
// 方法二，根据当前系统处理
var EOL = (process.platform === 'win32' ? '\r\n' : '\n');
// 将文件按行拆成数组
// text.split(/\r?\n/).forEach(function(line){
text.split(EOL).forEach(function(line){
  console.log(line);
});

// fs.writeFileSync('test.js', 'HELLO NODE.js', 'utf8');

fs.exists('test.js', function(exists){
  console.log(exists ? "It's there" : "no file!");
});

if(fs.exists(outputFolder)){
  console.log('Removing ' + outputFolder);
  fs.rmdir(outputFolder)
}
