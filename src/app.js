const express = require("express") ;
const path = require("path") ;
const hbs = require("hbs") ;
const app = express() ;
const port = process.env.PORT || 3000 ;

//public static path
const staticPath = path.join(__dirname, "../public") ;
const template_path = path.join(__dirname, "../templates/views") ;
const partials_Path = path.join(__dirname, "../templates/partials") ;

app.set("view engine","hbs") ;
app.set("views",template_path)

// hbs register partials
hbs.registerPartials(partials_Path) ;

app.use(express.static(staticPath)) ;


//routing
app.get("",(req,res)=> {
    res.render('index')
}) ;

app.get("/about",(req,res)=> {
    res.render('about')
}) ;

app.get("/weather",(req,res)=> {
    res.render('weather')
}) ;

app.get("*",(req,res)=> {
    res.render('404error',{
        errorMsg:"Oops! Page Not Found"
    })
}) ;

app.listen(port,() => {
    console.log(`listening to the port at ${port} `)
})