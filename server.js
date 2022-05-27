const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getQuote, findIndex } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// get random quote
app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({
    quote: randomQuote
  });
})

// get all quotes
app.get('/api/quotes', (req, res, next) => {
  let person = req.query.person;
  if (person !== undefined) {
    const quoteObj = getQuote(quotes, person);
    const response = { quotes: quoteObj }
    res.send(response);

    } else {
      res.send({
        quotes: quotes
      });
    }
  }
);

// post new quote
// UPDATE: add a quote on to an existing 
app.post('/api/quotes', (req, res, next) => {
  if (req.query.quote && req.query.person) {
    const quote = req.query.quote;
    const person = req.query.person;

    const quoteObj = {
      quote: quote,
      person: person
    }

    quotes.push(quoteObj);
    res.send({
      quote: quoteObj
    });

  } else {
    res.status(400).send();
  }

})

// put existing quote
// UPDATE: add a quote on to an existing person

app.put('/api/quotes', (req, res, next) => {
  const quote = req.query.quote;
  const person = req.query.person;
  let index = findIndex(quotes, person);

  if (quote && person && index !== -1) {
      quotes[index].quote = quote;
      
    res.send({
      quote: quotes[index]
    });
            
  } else {
    res.status(400).send();
  }
});
        
        
        
app.listen(PORT, console.log(`Listening on ${PORT}`));
