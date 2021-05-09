var express = require('express')
const bodyParser = require('body-parser');
var router = express.Router()

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// // define the home page route
// router.get('/', function (req, res) {
//   res.send(' Client page')
// })

// router.get('/', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });
router.post('/', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });


module.exports = router



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 5000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

