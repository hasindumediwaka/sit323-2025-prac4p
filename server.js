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

app.get('/exponentiate', (req, res) => {
  const base = parseFloat(req.query.base);
  const exponent = parseFloat(req.query.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input for base or exponent' });
  }

  const result = Math.pow(base, exponent);
  res.json({ result });
});

app.get('/modulo', (req, res) => {
  const dividend = parseFloat(req.query.dividend);
  const divisor = parseFloat(req.query.divisor);

  if (isNaN(dividend) || isNaN(divisor)) {
    return res.status(400).json({ error: 'Invalid input for dividend or divisor' });
  }

  const result = dividend % divisor;
  res.json({ result });
});

app.get('/sqrt', (req, res) => {
  const number = parseFloat(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Invalid input for number' });
  }

  if (number < 0) {
    return res.status(400).json({ error: 'Cannot compute square root of a negative number' });
  }

  const result = Math.sqrt(number);
  res.json({ result });
});


// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});