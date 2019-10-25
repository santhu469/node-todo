const mongoose = require('mongoose');

let booksListSchema = new mongoose.Schema({
    "title" : String,
    "subTitle" : String,
    "author" : String,
    "description": String,
    "publisher" : String,
    "ISBN" : String,
    "category" : String,
    "thumbnail" : String
});

const BooksListModel = mongoose.model("booksListModel", booksListSchema)

module.exports = BooksListModel;