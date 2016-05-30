var fs = require('fs');

// fs.mkdirSync('./helloDirSync', 0777);
// fs.writeFileSync('./helloDirSync/message.txt', 'Hello Node');
// var data = fs.readFileSync('./helloDirSync/message.txt', 'UTF-8');
// console.log('file created with contents:');
// console.log(data);

// fs.readdir(process.cwd(), function(err, files){
//   if(err){
//     console.log(err);
//     return;
//   }
//
//   var count = files.length;
//   var results = {}
//   files.forEach(function(filename){
//       fs.readFile(filename, function(data){
//         results[filename] = data;
//         count --;
//         if(count <= 0){
//           // 对所有文件进行处理
//         }
//       })
//   });
// });

// fs.readdir('/', function(err ,files){
//   if(err) throw err;
//
//   files.forEach(function(file){
//     fs.stat('/' + file, function(err, stats){
//       if(err) throw err;
//
//       if(stats.isFile()){
//         console.log('%s is file', file);
//       }
//       else if(stats.isDirectory){
//         console.log('%s is a directory', file);
//       }
//       console.log('stats: %s', JSON.stringify(stats));
//     });
//   });
// });

// fs.writeFileSync('./testFile.txt','Hello world！Hello Node！');
//
// fs.watchFile('./testFile.txt', function(curr, prev){
//   console.log('the current mtime is : ' + curr.mtime);
//   console.log('the previous mtime is : ' + prev.mtime);
// });
//
// fs.writeFile('./testFile.txt', 'changed', function(err){
//   if(err) throw err;
//
//   console.log('file write complete!');
// });

function readLines(input, func){
  var remaining = '';

  input.on('data', function(data){
    remaining += data;
    var index = remaining.indexOf(EOL);
    var last = 0;
    while(index > -1){
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf(EOL, last);
    }

    remaining = remaining.substring(last)
  });

  input.on('end', function(){
    if(remaining.length > 0){
      func(remaining);
    }
  });
}

function func(data){
  console.log('Line: ' + data);
}

var EOL = (process.platform === 'win32' ? '\r\n' : '\n');
var input = fs.createReadStream('lines.txt');
readLines(input, func);
