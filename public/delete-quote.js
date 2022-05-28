const submitButton = document.getElementById('submit-quote');
const deletedQuoteContainer = document.getElementById('deleted-quote');


submitButton.addEventListener('click', () => {
  deletedQuoteContainer.removeChild(deletedQuoteContainer.firstChild);
  const person = document.getElementById('person').value;
  const deletedQuote = document.createElement('div');

  fetch(`/api/quotes?person=${person}`, {
    method: 'DELETE',
  })
  .then(response => response.json()) 
  .then(({quote}) => {
    deletedQuote.innerHTML = `
    <h3>The quote by ${quote.person} has been deleted</h3>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    deletedQuoteContainer.appendChild(deletedQuote);
  }).catch((error) => {
    deletedQuote.innerHTML = `
    <h3>Please enter a valid author</h3>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes for reference.</p>
    `
    deletedQuoteContainer.appendChild(deletedQuote);
    console.log(error);
  });

});

// 