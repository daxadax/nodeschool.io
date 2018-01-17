var fs = require('fs');
var pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf8', function(error, contents){
  console.log(paragraphCount(contents));
});

function paragraphCount(text){
  return text.split("\n").length - 1;
};
