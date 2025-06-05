const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  // Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  return res.status(300).send(JSON.stringify(books, null, 2));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  // Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const isbn = req.params.isbn;

  return res.status(300).send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  // Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const author = req.params.author.toLowerCase();
  matchingBooks = [];

  // Iterate over the books
  for(let key of Object.keys(books)) {
    if(books[key].author.toLowerCase() === author) matchingBooks.push(books[key])
  }

  // If no books are found
  if(matchingBooks.length === 0 ) return res.status(404).json({ message: "No books found by this author!" });

  // Return matching books
  return res.status(200).json(matchingBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  // Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const title = req.params.title.toLowerCase();
  matchingBooks = [];

  // Iterate over the books
  for(let key of Object.keys(books)) {
    if(books[key].title.toLowerCase() === title) matchingBooks.push(books[key])
  }

  // If no books are found
  if(matchingBooks.length === 0 ) return res.status(404).json({ message: "No books found by this title!" });

  // Return matching books
  return res.status(200).json(matchingBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  // Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  const isbn = req.params.isbn;

  return res.status(300).send(books[isbn]);
});

module.exports.general = public_users;
