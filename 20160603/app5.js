var Radio = require('./radio.js');

var station = {
  freq: '80.16',
  name: 'Rock N Roll Radio'
};

var radio = new Radio(station);

radio.on('open', function(station){
  console.log('"%s" FM %s 打开', station.name, station.freq);
  console.log('bilibili bilibili');
});

radio.on('close', function(station){
  console.log('"%s" FM %s 关闭', station.name, station.freq);
});
