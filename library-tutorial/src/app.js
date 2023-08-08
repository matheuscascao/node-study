import express from 'express';
import db from "./config/dbConnect.js"
import books from "./models/Book.js"

db.on("error", console.log.bind(console, 'Connection Refused'))
db.once("open", () => {
  console.log('Successfully connected')
})

var app = express();
app.use(express.json())

app.get('/books/:title?', (req, res) => {
  if (req.query.title) {
    books.findOne({title: req.query.title}).then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  }
  else {
    books.find().then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
  }
});

app.post('/books', (req, res) => {
  let book = new books(req.body);

  book.save().then(() => {
    res.status(200).json({ message: book.toJSON() })
  }).catch((err) => { 
    res.status(500).json({ message: err })
  })
});

app.delete('/books/:title?', (req, res) => {
  let itemTitle = req.query.title;

  books.findOneAndDelete({ title: itemTitle }).then( () => {
    res.status(200).json({ message: 'Book deleted successfully' })
  }).catch((err) => { 
    res.status(500).json({ message: err })
  })
});

app.patch('/books/:title?', (req, res) => {
  let book = new books(req.body);
  let itemtitle = req.query.title;
  books.findOneAndUpdate({ title: itemtitle }, req.body).then( () => {
    console.log({ title: itemtitle });
    console.log(req.body)
    res.status(200).json({ message: 'Book updated successfully' })
  }).catch((err) => { 
    res.status(500).json({ message: err })
  })
})

export default app;