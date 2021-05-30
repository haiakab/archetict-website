 var mysql = require('mysql');
 var util = require('util');
 var SqlCon = require('../Config/General.json')


  var con = mysql.createConnection({
    host: SqlCon.DataBase.HOST,
    user: SqlCon.DataBase.USER,
    password: SqlCon.DataBase.PASSWORD,
    database:SqlCon.DataBase.DATABASE
  });     

  con.connect(function(err) {
            if (err) {throw err};
            console.log("Connected!");
            // con.query(DbQuery, function (err, result) {
            //  if (err) {throw err};
           
            //   console.log("Query Succeeded");
            //   console.log("Query result " + result );
            //   return result;
            //   // res.send(result);
            //   // return result;
            
            // });
          });

  var DbQuery = util.promisify(con.query).bind(con);
  console.log("result is " + DbQuery.result);
  module.exports = {DbQuery};

// module.exports.test = (DbQuery) => {
  
//     return new Promise (function(resolve,reject){
//       var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database:"ArchDB"
//       });



//         con.connect(function(err) {
//         if (err) {throw err};
//         console.log("Connected!");
//         con.query(DbQuery, function (err, result) {
//          if (err) {throw err};
       
//           console.log("Query Succeeded");
//           console.log("Query result " + result );
//           return result;
//           // res.send(result);
//           // return result;
        
//         });
//       });

      
//       // con.connect(function(err) {
//       //   if (err) {throw err};
//       //   console.log("Connected!");
//       //   con.query(DbQuery, function (err, result) {
//       //   // if (err) {throw err};
//       //   if (err)
//       //   {
//       //     return reject(err);
//       //   }
//       //   else 
//       //   {
//       //     console.log("Query Succeeded");
//       //     console.log("Query result " + result );
//       //     resolve(result);
//       //     // res.send(result);
//       //     // return result;
//       //   }
//       //   });
//       // });




//       // con.connect(function(err) {
//       //   if (err) {throw err};
//       //   console.log("Connected!");
//       //  new Promise ((resolve,reject) => { 
//       //    con.query(DbQuery, function (err, result) {
//       //   // if (err) {throw err};
//       //     if(err){
//       //       reject (err);
//       //     }else{
//       //       console.log("Query Succeeded");
//       //       console.log("Query result " + result );
//       //       resolve(result);
//       //     }
        
//       //     // res.send(result);
//       //     // return result;
        
//       //   });
//       // })
//       // .then(result => {console.log("AFTER  " +result.toString())})

//       // .catch(err => {
//       //   console.log("ERRR " +err);
//       // })
//       // });

//     })
// }