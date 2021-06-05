var express = require('express')
const bodyParser = require('body-parser');
var router = express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var loginDB = require('./Login-DB');
// define the home page route


router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
router.post('/login', async (req, res) =>  {
  console.log(req.body);
  let result = await getUserData(req.body);
   res.send(result);
  //  `Server: "I received your POST request. Your Name is:  ${result.name}, Your email is: ${result.email},Your Password is: ${result.password}"`:result
});

let getUserData = async (userInfo) => {
  console.log("USERS DATA : " + userInfo);
  let info= await loginDB.loginDB(userInfo);
  if(info.length > 0 ){
    if(userInfo.password != info[0].password)
       return("uncorrect password!");
    return(info);
  }
  else
    return("unavailable user");
} 

  


module.exports = router