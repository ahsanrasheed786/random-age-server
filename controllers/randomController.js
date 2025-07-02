// controllers/randomController.js

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

const getRandomData = (req, res) => {
  // Generate random object
  const randomObj = getRandomElement(objArray);
  const randomSurname = getRandomElement(surnameArray);
  const randomAge = generateRandomAge();

  // Combine and send response
  const responseObj = {
    ...randomObj,
    surname: randomSurname,
    age: randomAge,
  };

  res.json(responseObj);
};

module.exports = { getRandomData };
