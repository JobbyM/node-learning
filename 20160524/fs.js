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

var outputFolder = './test';

if(fs.exists(outputFolder)){
  console.log('Removing ' + outputFolder);
  fs.rmdir(outputFolder)
}else{
  console.log(outputFolder + ' not exists!');
}

// fs.mkdir('./helloDir', 0777, function(err){
//   if(err) throw err;
// });

// fs.writeFile('./helloDir/message.txt', 'Hello Node.js', function(err){
//   if(err) throw err;
//   console.log('文件写入成功');
// });

fs.readFile('./helloDir/message.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log(data);
});

fs.readFile('./helloDir/message.txt', function(err, data){
  if(err) throw err;
  console.log(data);
  console.log(data.toString());
});
