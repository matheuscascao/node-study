import express from 'express';
import db from "./config/dbConnect.js"
import booksModel from "./models/Book.js"

db.on("error", console.log.bind(console, 'Connection Refused'))
db.once("open", () => {
  console.log('Successfully connected')
})

var app = express();
app.use(express.json())

const books = [
  {id: 1, "title": "LOTR 1", description: "the first book of the lotr series"},
  {id: 2, "title": "LOTR 2", description: "the second book of the lotr series", pageNumber: 199}
]

app.get('/books/:id', (req, res) => {
  if (req.query.id) {
    let itemId = req.query.id;
    let bookItem = books.find(({id}) => id == itemId);
    res.status(200).json(bookItem);
  }
  else {
    res.status(200).json(books);
  }
});

app.post('/books', (req, res) => {
  let jsonResponse = req.body;
  jsonResponse.id = books.length + 1;
  books.push(req.body);
  console.log(books);
  res.status(201).json(req.body)
});

app.delete('/books/:id', (req, res) => {
  let itemId = req.query.id;
  let itemToBeRemovedIndex = findBook(itemId);
  console.log(itemToBeRemovedIndex);

  if (itemToBeRemovedIndex !== -1) {
    books.splice(itemToBeRemovedIndex, 1);
    res.status(200).json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.patch('/books/:id', (req, res) => {
  let jsonResponse = req.body;
  let itemId = req.params.id;
  let itemMessage = jsonResponse.message;
  let itemToBeUpdatedIndex = findBook(itemId);
  if (itemToBeUpdatedIndex !== -1){
    books[itemToBeUpdatedIndex].message = itemMessage;
    res.status(201).json({ message: 'Book updated successfully' })
  } else {
    res.status(404).json({ message: 'Book updated successfully' })
  }
})

function findBook(bookId) {
  return books.findIndex(book => book.id == bookId);
}

export default app;