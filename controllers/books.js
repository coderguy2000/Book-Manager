const Book = require("../models/book");
const getAllBooks = async (req, res) => {
  try {
    const result = await Book.find();
    res.send(result);
  } catch (error) {
    res.send(e);
  }
};
const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const result = await Book.insertMany([newBook]);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const getBook = async (req, res) => {
  try {
    const result = await Book.find({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
const updateBook = async (req, res) => {
  try {
    const result = await Book.updateMany(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteBook = async (req, res) => {
  try {
    const result = await Book.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
