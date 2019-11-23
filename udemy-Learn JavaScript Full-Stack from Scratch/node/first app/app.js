let express = require("express")
let ourApp = express()
ourApp.get('/',function ( req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p> Which is the capital city of Assam? </p>
        <input name="cityValue" autocomplete="off">
        <button> Submit Answer </button>
    </form>
    `)
})
ourApp.listen(3000)

