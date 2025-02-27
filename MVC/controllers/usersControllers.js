export const gettAllUsers = (req, res) => {
    res.sendFile("./models/users.json", { root: "." });
};

export const createUser = (req, res) => {
  res.send("post req");
};

export const updateUser = (req, res) => {
  console.log(req.params);
  res.send("patch req" + req.params.id + req.params.name);
};

export const deleteUser = (req, res) => {
  res.send("del req");
};
