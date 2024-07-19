const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  { id: 4, title: "Book 4", author: "Author 4" },
  { id: 5, title: "Book 5", author: "Author 5" },
  { id: 6, title: "Book 6", author: "Author 6" },
  { id: 7, title: "Book 7", author: "Author 7" },
  { id: 8, title: "Book 8", author: "Author 9" },
];

(exports.getBooks = (req, res) => {
  res.json(books);
}),
  (exports.getBook = (req, res) => {
    const id = req.params.bookid;
    const book = books.find((book) => book.id == id);

    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json(book);
  }),
  (exports.addbook = (req, res) => {
    // const newUser = { id: users.length + 1, ...req.body };
    // users.push(newUser);
    // res.status(201).json(newUser);
    const book = req.body;
    books.push(book);
    res.status(201).json({
      status: "success",
      data: books,
    });
  }),
  (exports.updatebook = (req, res) => {
    const id = parseInt(req.params.bookid);
    const index = books.findIndex((book) => book.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "book not found" });
    }
    const updatedbook = { ...books[index], ...req.body };
    books[index] = updatedbook;
    res.json(updatedbook);
  }),
  (exports.deletebook = (req, res) => {
    const id = +req.params.bookid;
    console.log(id);
    const index = books.findIndex((book) => book.id === id);
    console.log(index);
    if (index === -1) {
      return res.status(404).json({ message: "book not found" });
    }
    books.splice(index, 1);
    res.json(books);
  });
