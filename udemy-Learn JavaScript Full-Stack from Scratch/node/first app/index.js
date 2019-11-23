let http = require("http")
let ourApp = http.createServer(function (req,res){
    console.log(req.url);
    if (req.url == "/"){
        res.end("hello welcome to the main home page")
    }
    if (req.url == "/about"){
        res.end("Thanks for visiting about us page")
    }
       
})
ourApp.listen(4567)