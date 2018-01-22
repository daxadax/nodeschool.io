// libraries
var http = require('http')

// local variables
var requestUrls = process.argv.slice(2);
var result = {};

// set urls
requestUrls.forEach(function(url){
  result[url] = '';

  http.get(url, function(response){
    response.setEncoding('utf8');

    response.on('data', function(data){
      result[url] += data;
    });

    response.on('end', function(){
      incrementFinishedCounter();
      printWhenComplete();
    });
  });
});

for(var i = 0; i < requestUrls.length; i++){
};

function incrementFinishedCounter(){
  if(result.finished != null){
    result.finished += 1;
  } else {
    result.finished = 1;
  };
};

function printWhenComplete(){
  console.log(result);
  if(result.finished === requestUrls.length){
    for(var i = 0; i < requestUrls.length; i++){
      return console.log(result[requestUrls[i]]);
    };
  };
};
