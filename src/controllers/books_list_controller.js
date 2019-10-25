const BooksListModel = require('../models/book_list_model');

module.exports = {
    create: async (req, resp) => {
        let bookData = req.body;
        BooksListModel.create(bookData, (error, book) => {
            if (error) {
                resp.send({
                    message:"error"
                })
            }else{
                resp.send({
                    message:"success",
                    status: 200,
                    data:book
                })
            }
        })
    },

    getAll: async (req, resp) => {
        BooksListModel.find({}, (error, booksList) =>{
            if (error) {
                resp.send({
                    message:"something went wrong"
                });
            }else{
                resp.send({
                    message:"success",
                    data:booksList,
                    status:200
                });
            }
        })
    },

    update: async (req, resp) => {
        let id = req.body;
        BooksListModel.findByIdAndUpdate({_id:id}, (error, booksList) =>{
            if (error) {
                resp.send(
                    {
                        message:"error"
                    }
                )
            }else{
                resp.send({
                    message:"success",
                    data:booksList,
                    status:200
                });
            }
        })
    },

    delete: async (req, resp) => {
        let id = req.body;
        BooksListModel.deleteOne({_id:id}, (error, booksList) =>{
            if (error) {
                resp.send(
                    {
                        message:"error"
                    }
                )
            }else{
                resp.send({
                    message:"success",
                    data:booksList,
                    status:200
                });
            }
        })
    }
}