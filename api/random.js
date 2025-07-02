// api/random.js

const { generateRandomAge, getRandomElement } = require('../utils/randomGenerator');

// Data arrays
const objArray = [
  { firstname: 'Ahsan', gender: '', country: 'pk' },
  { firstname: 'Tahir', gender: '', country: 'pk' },
  { firstname: 'Khawar', gender: '', country: 'pk' },
  { firstname: 'ali', gender: '', country: 'pk' },
  { firstname: 'nasir', gender: '', country: 'pk' },
  { firstname: 'Mohammad', gender: '', country: 'pk' },
];

const surnameArray = ['Khan', 'Choudhry', 'Siddiqui', 'Hussain', 'Ahmed', 'Ali', 'Raza', 'Bilal'];

// Handle the request for random data
const getRandomData = (req, res) => {
  const randomObj = getRandomElement(objArray);
  const randomSurname = getRandomElement(surnameArray);
  const randomAge = generateRandomAge();

  const responseObj = {
    ...randomObj,
    surname: randomSurname,
    age: randomAge,
  };

  res.json(responseObj);
};

// Vercel function handler
module.exports = async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/random') {
    getRandomData(req, res);
  } else {
    res.status(404).send('Not Found');
  }
};
