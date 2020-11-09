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

//invoke morgan function
app.use(morgan('dev'));
console.log(morgan);

app.get('/',(req,res) =>{
res.sendFile('./views/index.html',{root : __dirname});
})

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});


//redirects
//redirects method redirects the html page and also sets the status code
app.get('/about-us',(req,res) =>{
res.redirect('/about');
})

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


 