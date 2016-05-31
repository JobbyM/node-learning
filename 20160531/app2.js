var fs = require('fs');

fs.createReadStream('wow.txt')
  .pipe(process.stdout);
