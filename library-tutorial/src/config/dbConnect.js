//cascao
// 123
// import mongoose from 'mongoose';

import mongoose from "mongoose"

mongoose.connect("mongodb+srv://cascao:123@library.4xnybbb.mongodb.net/library");

let db = mongoose.connection;

export default db;
