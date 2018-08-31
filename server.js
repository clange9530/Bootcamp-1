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
    //Sets status code and content type, then pipes from the readable stream
    //of listingData to the response.
    response.writeHead(200, {'Content-Type': 'text/plain'});
    listingData.pipe(response);
  } else {
    //Sets header data, then writes body before ending the response.
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Bad gateway error');
    response.end();    
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  //Turns data from listings.json into a readable stream.
  listingData = fs.createReadStream(__dirname + '/listings.json', 'utf-8');
  server = http.createServer(requestHandler);
  server.listen(port, function(){
    console.log('Server listening on: http://127.0.0.1:' + port);
  }); 
});