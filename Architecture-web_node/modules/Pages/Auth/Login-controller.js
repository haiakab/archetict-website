var express = require('express')
const bodyParser = require('body-parser');
var router = express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// define the home page route


router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
router.post('/login', (req, res) => {
  console.log(req.body);
  res.send(
    `Server: "I received your POST request. Your Name is: ${req.body.name}, Your email is: ${req.body.email},Your Password is: ${req.body.password}"`,
  );
});

  


module.exports = router