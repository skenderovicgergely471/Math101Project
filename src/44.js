const express = require('express');
const app = express();
app.use(express.static('./public'));

// Define routes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
