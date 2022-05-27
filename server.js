const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({
    quote: randomQuote
  });
})

app.get('/api/quotes', (req, res, next) => {
  let person = req.query.person;
  
  if (!(person)) {
    res.send(quotes);
  } else {
    
  }
})


app.listen(PORT, console.log(`Listening on ${PORT}`));
