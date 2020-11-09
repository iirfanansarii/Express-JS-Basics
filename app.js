/* Redirects and 404 */

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


//redirects
//redirects method redirects the html page and also sets the status code

app.get('/about-us',(req,res) =>{
res.redirect('/about');
})

/*404 page 
.use is a middleware function 
use function is going to fire for every request(req) coming in 
when you type any ulr in the browser then it's going see is any match present in the express app if yes then shwo tha
other wise it will  show the 404.html file 
*/
app.use((req,res) =>{
res.sendFile("./views/404.html", { root: __dirname });

})

//listen for request 
app.listen((3000));


