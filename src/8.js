const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);
  const sum = num1 + num2;

  res.send(`<p>${num1} + ${num2} = ${sum}</p>`);
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
