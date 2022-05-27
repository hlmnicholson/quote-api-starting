const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuote = (arr, requested) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr.filter(obj => obj.person === requested);
}

module.exports = {
  getRandomElement,
  getQuote
};
