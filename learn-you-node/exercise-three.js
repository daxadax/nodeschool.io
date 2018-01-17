var fs = require('fs');
var pathToFile = process.argv[2];
var input = fs.readFileSync(pathToFile).toString();

console.log(paragraphCount(input));

function paragraphCount(text){
  return text.split("\n").length - 1;
};
