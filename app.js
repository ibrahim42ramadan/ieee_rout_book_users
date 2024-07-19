const express = require("express");
const app = express();
const usersControlar = require("./Handlar");
const booksControlar = require("./bookHandlar");
console.log(usersControlar);

// Middleware
// for all data well be a json data evry once
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method);
  next();
});
const validateUser = (req, res, next) => {
  if (!req.body.name || !req.body.emal) {
    return res.status(400).json({
      messeg: "error name and email requir",
    });
  }
  res.json(users);
  next();
};
const validatebooks = (req, res, next) => {
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({
      messeg: "error title and author requir",
    });
  }
  res.json(books);
  next();
};
// routes
app
  .route(`/api/users`)
  .get(usersControlar.getUsers)
  .post(validateUser, usersControlar.addUser);
// get user
app
  .route(`/api/users/:userid`)
  .get(usersControlar.getUser)
  .delete(usersControlar.deleteUser)
  .patch(validateUser, usersControlar.updateUser);
app
  .route(`/api/books`)
  .get(booksControlar.getBooks)
  .post(validatebooks, booksControlar.addbook);
// get user
app
  .route(`/api/books/:bookid`)
  .get(booksControlar.getBook)
  .delete(booksControlar.deletebook)
  .patch(validatebooks, booksControlar.updatebook);

app.listen(9000, () => {
  console.log("you are listening on 9000");
});
