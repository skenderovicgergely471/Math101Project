const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const mathProblems = [
    { question: 'What is the sum of 2 + 2?', answer: 4 },
    { question: 'What is the product of 3 x 3?', answer: 9 },
    { question: 'What is the quotient of 6 / 2?', answer: 3 },
    { question: 'What is the remainder of 11 % 5?', answer: 0 },
  ];

  res.json(mathProblems);
});

app.listen(3000, function() {
  console.log('Math101Project server started on port 3000');
});
