//import
const express = require("express");


//express app
const app = express();

/* Third Party Middleware 
* there many third party middleware here we gonna use morgan
*npm install morgan
 */

//import morgan
const morgan = require('morgan');

//middleware and static files
//anythig inside static file folder gonna be static at front end
app.use(express.static('static file'));
app.use(morgan('dev'));


app.get('/',(req,res) =>{
res.sendFile('./views/index.html',{root : __dirname});
})

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});


/*404 page 
* use is a middleware function  
* use function is going to fire for every request(req) coming from browser
* when you type any ulr in the browser then it's going see is any match present in the express app if yes then shwo tha
* other wise it will  show the 404.html file 
*/

// here we have define status coz express doesnt know it is 404 page
app.use((req,res) =>{
res.status(404).sendFile("./views/404.html", { root: __dirname });

})

//listen for request 
app.listen((3000));


 