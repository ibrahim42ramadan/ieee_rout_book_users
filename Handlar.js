const users = [
  { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
  { id: 2, name: "Omar Yasser", email: "omar@me.io" },
  { id: 3, name: "Mai Yasser", email: "mai@me.io" },
];

(exports.getUsers = (req, res) => {
  res.json(users);
}),
  (exports.getUser = (req, res) => {
    const id = req.params.userid;
    const user = users.find((user) => user.id == id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  }),
  (exports.addUser = (req, res) => {
    // const newUser = { id: users.length + 1, ...req.body };
    // users.push(newUser);
    // res.status(201).json(newUser);
    const user = req.body;

    users.push(user);

    res.status(201).json({
      status: "success",
      data: users,
    });
  }),
  (exports.updateUser = (req, res) => {
    const id = parseInt(req.params.userid);
    const index = users.findIndex((user) => user.id == id);
    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = { ...users[index], ...req.body };
    users[index] = updatedUser;
    res.json(updatedUser);
  }),
  (exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    users.splice(index, 1);
    res.json(users);
  });
