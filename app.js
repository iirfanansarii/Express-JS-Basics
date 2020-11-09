//import
const express = require("express");

//express app
const app = express();


app.get('/',(req,res) =>{
res.send('<h1>Hello </h1>');
})

//listen for request 
app.listen(3000);


/*Express 
*You don't have to define status code manually
*You don't have to define res content type manually
*
 */