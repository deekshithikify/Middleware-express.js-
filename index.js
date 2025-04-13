const { name } = require('ejs');
const express = require('express');
 const createError = require('http-errors');
 var path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// app.use (function (req, res, next) {
//   console.log('LOGGED')                           //global Middleware
//   next()
// });



// app.use ("/about",function (req, res, next) {
//   console.log('LOGGED')                           //local Middleware
//   next()
// });

app.use("/about", function (req, res, next) {

  if(true){
    res.redirect("/")
  }

  console.log("LOGGED");
  next();
})



app.get('/', function (req, res) {
  res.render("index", {name: req.query.name || "Coding Utsava"});
});
                                                                  
app.get('/:username', (req, res) => {
  res.render("index", {name: req.params.username});
});

app.get('/about', (req, res) => {
  res.send("About!");
});

app.get('/contact', (req, res) => { 
  res.send("contact!");
});

app.use(function(req, res, next){
  next(createError(404));  
});

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`); 
});