const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const connString = process.env.MONGO_URI;

const Book = mongoose.model(
  'Book',
  new mongoose.Schema({
    title: String,
    author: String,
  }),
);

const app = express();

async function connectDB() {
  try {
    await mongoose.connect(connString, {});
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
}

connectDB();

app.get('/', async (req, res) => {
  console.log('listando...');
  const books = await Book.find();
  res.send(books);
});

app.get('/crear', async (req, res) => {
  console.log('creando...');
  await Book.create({ title: 'The Stand', author: 'Stephen King' });
  return res.send('ok').status(200);
});

app.listen(PORT, () => {
  console.log('Listening...');
});
