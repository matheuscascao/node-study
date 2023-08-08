import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        pageNumber: {type: String, required: false}
    }
);

const books = mongoose.model('books', booksSchema);

export default books;