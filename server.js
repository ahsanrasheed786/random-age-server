  // // const express = require('express');
  // // const randomRoutes = require('./routes/randomRoutes');
  // // const app = express();
  // // const config = require('./config/config');

  // // // Middleware
  // // app.use(express.json());

  // // // Routes
  // // app.use('/api', randomRoutes);
  // // app.use('/', (req, res) => res.send('server is running'));

  // // // Start the server
  // // const PORT = config.PORT || 3000;
  // // app.listen(PORT, () => {
  // //   console.log(`Server running on port ${PORT}`);
  // // });



  // // server.js
  // const express = require('express');
  // const randomRoutes = require('./routes/randomRoutes');
  // const app = express();

  // // Middleware
  // app.use(express.json());

  // // Routes
  // app.use('/api', randomRoutes);

  // // This is for Vercel to handle the route
  // module.exports = app;


  // const express = require('express');
  // const randomRoutes = require('./routes/randomRoutes');
  // const app = express();

  // // Middleware
  // app.use(express.json());

  // // Routes
  // app.get('/', (req, res) => {
  //   res.send('Server is running');
  // });

  // app.use('/api', randomRoutes);

  // // For Vercel to handle the route (serverless function)
  // if (process.env.NODE_ENV === 'production') {
  //   module.exports = app; // For Vercel
  // } else {
  //   const PORT = process.env.PORT || 3000;
  //   app.listen(PORT, () => {
  //     console.log(`Server running on port ${PORT}`);
  //   });
  // }



//   const express = require('express');
// const randomRoutes = require('./routes/randomRoutes');
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// app.use('/api', randomRoutes);

// // For local development: listen on a port
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// // For Vercel to handle the route (serverless function)
// module.exports = app;




// const express = require('express');
// const randomRoutes = require('./routes/randomRoutes');
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// app.use('/api', randomRoutes);

// // For local development: listen on a port
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// // For Vercel to handle the route (serverless function)
// module.exports = app;



// // server.js
// const express = require('express');
// const randomRoutes = require('./routes/randomRoutes');
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api', randomRoutes);

// // For Vercel to handle the route (serverless function)
// module.exports = app;  // Vercel will use this app in a serverless context



// ?? test 
// 
// 
// // server.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// For Vercel to handle the route (serverless function)
module.exports = app;
