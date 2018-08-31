var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

//Global variables declared.
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  //If statement sends data if method/path are correct.
  if(request.method == 'GET' && parsedUrl.pathname == '/listings'){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    listingData.pipe(response);
  } else{
    response.statusCode = 404;
    response.end();    
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  //Save data from listings.json into listingData.
  listingData = fs.createReadStream(__dirname + '/listings.json', 'utf-8');
  server = http.createServer(requestHandler);
  server.listen(port, function(){
    console.log('Server listening on: http://127.0.0.1:' + port);
  }); 
});