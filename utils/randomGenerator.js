

// function generateRandomAge() {
//   const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

//   // Get the current year
//   const currentYear = new Date().getFullYear();
  
//   // Generate a random year between (currentYear - 55) and (currentYear - 18)
//   const randomYear = Math.floor(Math.random() * (currentYear - 18 - (currentYear - 55) + 1)) + (currentYear - 55);

//   const randomMonth = months[Math.floor(Math.random() * months.length)];
//   const randomDate = Math.floor(Math.random() * 28) + 1; // Random date between 1 and 28

//   return `${randomDate}-${randomMonth}-${randomYear}`;
// }

// function getRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// module.exports = {
//   generateRandomAge,
//   getRandomElement,
// };





// utils/randomGenerator.js

function generateRandomAge() {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const currentYear = new Date().getFullYear();
  const randomYear = Math.floor(Math.random() * (currentYear - 18 - (currentYear - 55) + 1)) + (currentYear - 55);

  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDate = Math.floor(Math.random() * 28) + 1;

  return `${randomDate}-${randomMonth}-${randomYear}`;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { generateRandomAge, getRandomElement };
