var listFilesInDirectory = require('./list-files-in-directory');

var directory = process.argv[2];
var extension = process.argv[3];

listFilesInDirectory(directory, extension, function(error, contents){
  if (error) return console.error(error);
  contents.forEach(function(file){
    console.log(file);
  });
});
