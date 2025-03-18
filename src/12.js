var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body>Hello World</body></html>');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
