var execSync = require('child_process').execSync;

var SEPARATOR = process.platform === 'win32' ? ';' : ':';
var env = Object.assign({}, process.env);

env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

function myExecSync(cmd){
  var output = execSync(cmd, {
    cwd: process.cwd(),
    env: env
  });

  console.log(output);
}

myExecSync('eslint .')
