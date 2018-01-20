var fs = require('fs');
var path = require('path');

module.exports = function listFilesInDirectory(directory, extension, callback){
  fs.readdir(directory, function(error, files){
    if (error) return callback(error);

    filtered = files.filter(function(file){
      return path.extname(file) === '.' + extension
    });

    return callback(null, filtered);
  })
};
