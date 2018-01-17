var fs = require('fs');
var path = require('path');

// pattern is an optional argument
// call with a pattern ('.md', '.txt', etc) to list only files with that extension
module.exports = function listFilesInDirectory(directory, pattern, callback){
  var pattern = arguments[1] || ''

  fs.readdir(directory, function(error, files){
    if (error) return callback(error);

    files.forEach(function (file) {
      if (path.extname(file) === pattern) {
        return callback(null, file);
      }
    })
  })
};
