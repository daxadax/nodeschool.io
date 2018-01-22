// libraries
var http = require('http')

// local variables
var requestUrl = process.argv[2]

http.get(requestUrl, function(response){
  response.setEncoding('utf8')

  response.on('data', function(data){
    console.log(data);
  });
});
