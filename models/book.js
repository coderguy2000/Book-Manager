const mongoose = require("mongoose");
var validate = require("mongoose-validator");
const validator = require("validator");

const imageUrlValidator = [
  validate({
    validator: (value) =>
      validator.isURL(value, {
        protocols: ["http", "https", "ftp"],
        require_tld: true,
        require_protocol: true,
      }),
    message: "Must be a Valid URL",
  }),
];
const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: [true, "Same Name Book is Already Present, Try Another Name.."],
    trim: true,
  },
  imageUrl: {
    type: String,
    validate: imageUrlValidator,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
  },
  pages: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//new collection
const Book = new mongoose.model("Book", BookSchema);
module.exports = Book;
