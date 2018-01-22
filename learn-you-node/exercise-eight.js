// libraries
var http = require('http');

// local variables
var requestUrl = process.argv[2];
    result = '';

http.get(requestUrl, function(response){
  response.setEncoding('utf8');

  response.on('data', function(data){
    result += data;
  });

  response.on('end', function(){
    console.log(result.length);
    console.log(result);
  });
});

