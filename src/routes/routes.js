const BooksListController = require('../controllers/books_list_controller');

module.exports = app => {

    app.route("/ping").get( (req, resp)=>{
        resp.send({
            message:"pong"
        })
    })
    app.route("/book").post(BooksListController.create);
    app.route("/books").get(BooksListController.getAll);
    app.route("/update").post(BooksListController.update);
    app.route("/delete").delete(BooksListController.delete);
}