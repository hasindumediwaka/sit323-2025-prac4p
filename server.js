const express = require('express');
const app = express();
const port = 3000;

// Helper function to check if a number is valid
function isValidNumber(num) {
  return !isNaN(num) && num !== '';
}

// Addition endpoint
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (isValidNumber(num1) && isValidNumber(num2)) {
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid numbers provided for addition.' });
  }
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (isValidNumber(num1) && isValidNumber(num2)) {
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid numbers provided for subtraction.' });
  }
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (isValidNumber(num1) && isValidNumber(num2)) {
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid numbers provided for multiplication.' });
  }
});

// Division endpoint
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (isValidNumber(num1) && isValidNumber(num2)) {
    if (parseFloat(num2) === 0) {
      res.status(400).json({ error: 'Cannot divide by zero.' });
    } else {
      const result = parseFloat(num1) / parseFloat(num2);
      res.json({ result });
    }
  } else {
    res.status(400).json({ error: 'Invalid numbers provided for division.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
