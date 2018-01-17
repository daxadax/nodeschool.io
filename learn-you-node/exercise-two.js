var args = process.argv.slice(2);
var result = args.reduce(function(currentTotal, number){
  return currentTotal += Number(number);
}, 0);

console.log(result);
