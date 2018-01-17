var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var pattern = '.' + process.argv[3];

fs.readdir(directory, function(error, files){
  if (error) return console.error(error)

  files.forEach(function (file) {
    if (path.extname(file) === pattern) {
      console.log(file)
    }
  });
});

