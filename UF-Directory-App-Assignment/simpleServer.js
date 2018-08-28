var http = require('http');
var port = 8080; 
var fs = require('fs');
var url = require('url');
var listingData = fs.createReadStream(__dirname + '/listings.json', 'utf-8');

//Your request handler should send listingData in the JSON format if a GET request 
//is sent to the '/listings' path. Otherwise, it should send a 404 error.
var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url);
  if(request.method == 'GET' && parsedUrl.pathname == '/listings' ){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    listingData.pipe(response);
  }else{
    response.statusCode = 404;
    response.end();
  } 
});


// the server is now started, listening for requests on port 8080
  server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: http://127.0.0.1:' + port);
});
console.log('Is the server started?');