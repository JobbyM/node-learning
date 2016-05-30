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

fs.readdir('/', function(err ,files){
  if(err) throw err;

  files.forEach(function(file){
    fs.stat('/' + file, function(err, stats){
      if(err) throw err;

      if(stats.isFile()){
        console.log('%s is file', file);
      }
      else if(stats.isDirectory){
        console.log('%s is a directory', file);
      }
      console.log('stats: %s', JSON.stringify(stats));
    });
  });
});
