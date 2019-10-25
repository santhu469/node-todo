const express = require('express');
const mongodb = "mongodb://127.0.0.1/bookslibrary"
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const schema = mongoose.Schema;
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

let booksListSchema = new schema({
    "title" : String,
    "subTitle" : String,
    "author" : String,
    "description": String,
    "publisher" : String,
    "ISBN" : String,
    "category" : String,
    "thumbnail" : String
})

let BooksListModel = mongoose.model("booksListModel", booksListSchema)
let db = mongoose.connection;
// db.on(console.error.bind( console, 'mongo error:'));
app.use(bodyParser.json())
app.set("view engine", "pug");


app.post('/book', (req, resp) => {
    console.log("book request",req.body)
    let bookData = req.body;
    BooksListModel.create(bookData, (error, book) => {
        if (error) {
            resp.send({
                message:"error"
            })
            return console.log("error",error);
        }
        resp.send({
            message:"success",
            status: 200,
            data:book
        })
    })
})

app.get('/books', (req, resp) => {
    // data inserting
    console.log("req")
    BooksListModel.find({}, (error, booksList) =>{
        if (error) {
            resp.send({
                message:"something went wrong"
            });
            return console.log(error);
        }
        resp.send({
            message:"success",
            data:booksList,
            status:200
        });
    })
});

app.delete('/book/delete', (req, resp) => {
    // data inserting
    let id = req.body;
    console.log(id)
    BooksListModel.deleteOne({_id:id}, (error, booksList) =>{
        if (error) {
            resp.send(
                {
                    message:"error"
                }
            )
            return console.log(error);
        }
        resp.send({
            message:"success",
            data:booksList,
            status:200
        });
    })
});

app.listen(port, () => {
    console.log("listening on port", port);
})