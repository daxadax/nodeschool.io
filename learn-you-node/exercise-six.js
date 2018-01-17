var listFilesInDirectory = require('./list-files-in-directory');

var directory = process.argv[2];
var pattern = '.' + process.argv[3];

listFilesInDirectory(directory, pattern, function(error, contents){
  if (error) return console.error(error);
  return console.log(contents);
});
