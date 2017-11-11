
var http = require('http');
var url = require('url');
var fs = require('fs');

console.log('Server available at http://localhost:3000');

//create a server object:
http.createServer(function (req, res) {
if (req.method == "POST") {
  var body = '';
  req.on('data', function (data) {
  body += data;
});
req.on('end', function () {
  console.log(JSON.parse(body));
});
res.end();
} else {
  fs.createReadStream('index.html').pipe(res);
}

}).listen(3000);
