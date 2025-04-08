let express = require('express');
let app = express();
app.get('/', function(req, res) {
  res.sendfile('./index.html'); // replace with your desired HTML file path
});

app.listen(3000);
