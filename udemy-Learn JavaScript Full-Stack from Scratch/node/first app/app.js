let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/',function ( req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p> Which is the capital city of Assam? </p>
        <input name="cityValue" autocomplete="off">
        <button> Submit Answer </button>
    </form>
    `)
})

ourApp.post('/answer',function( req, res){
    if(req.body.cityValue.toUpperCase() =="GHY"){
        res.send(`
            <p>Congratulations, your answer is correct </p>
            <a href="/">Back to homepage</a>
        `)
    }
    else{
        res.send(`
        <p>Sorry, your answer is incorrect </p>
        <a href="/">Back to homepage</a>
    `)
    }
})

ourApp.get('/answer',function( req, res){
    res.send("Sorry, please try again by filling the form")
})

ourApp.listen(3000)

