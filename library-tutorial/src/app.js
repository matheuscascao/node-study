import express from 'express';

var app = express();

const books = [
  {id: 1, "title": "LOTR 1"},
  {id: 2, "title": "LOTR 1"}
]

app.get('/books', (req, res) => {
    let item = req.query.item;
    let bookItem = books.find(({id}) => id == item);
    res.status(200).json(bookItem);
    // res.status(200).json(books);
});

app.post('/books', (req, res) => {
    


});

export default app;