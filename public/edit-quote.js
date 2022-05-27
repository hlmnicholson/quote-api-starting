const submitButton = document.getElementById('submit-quote');
const editedQuoteContainer = document.getElementById('edited-quote');


submitButton.addEventListener('click', () => {
  editedQuoteContainer.removeChild(editedQuoteContainer.firstChild);
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;
  const editedQuote = document.createElement('div');

  fetch(`/api/quotes?quote=${quote}&person=${person}`, {
    method: 'PUT',
  })
  .then(response => response.json())
  .then(({quote}) => {
    editedQuote.innerHTML = `
    <h3>Congrats, your quote was edited!</h3>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    editedQuoteContainer.appendChild(editedQuote);
  }).catch((error) => {
    editedQuote.innerHTML = `
    <h3>Please enter a valid author and quote</h3>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes for reference.</p>
    `
    editedQuoteContainer.appendChild(editedQuote);
    console.log(error);
  });

});

///Delete version