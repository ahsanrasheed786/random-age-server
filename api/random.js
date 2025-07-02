// // api/random.js
// const { getRandomData } = require('../controllers/randomController');

// module.exports = (req, res) => {
//   if (req.method === 'GET') {
//     getRandomData(req, res);
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// };

// api/random.js
const { getRandomData } = require('../controllers/randomController');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    getRandomData(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
