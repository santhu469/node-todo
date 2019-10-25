const express = require('express');
const mongodb = "mongodb://127.0.0.1/bookslibrary"
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const options = {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true  
}

mongoose.connect(mongodb, options).then( ()=>{
    console.log("success", mongodb);
}).catch( error =>{
    console.log("error", error)
});

// db.on(console.error.bind( console, 'mongo error:'));
app.use(bodyParser.json())
const temp = require('./src/routes/routes');
console.log("hello",temp)
require('./src/routes/routes')(app);

app.listen(port, () => {
    console.log("listening on port", port);
})