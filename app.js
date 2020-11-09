//import
const express = require("express");

//express app
const app = express();


app.get('/',(req,res) =>{
res.sendFile('./views/index.html',{root : __dirname});
})

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});


//listen for request 
app.listen(3000);


/*Express 
*You don't have to define status code manually
*You don't have to define res content type manually
*
 */