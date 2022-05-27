const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuote = (arr, requested) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr.filter(obj => obj.person.toLowerCase() === requested.toLowerCase());
}

const findIndex = (arr, requested) => {
  return arr.findIndex(object => object.person.toLowerCase() === requested.toLowerCase());  
} 

module.exports = {
  getRandomElement,
  getQuote,
  findIndex
};
