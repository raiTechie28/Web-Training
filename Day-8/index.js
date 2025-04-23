const express = require("express");
const app = express();
const port = 3000;
const dbConnect = require("./config/db");
dbConnect().catch((err) => console.log(err));
const User = require("./models/userSchema");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/addData", async (req, res) => {
  const data = {
    name: "raja",
    email: "test@gmail.com",
    phone: "123456789",
    password: "12345",
  };
  const user = new User(data);
  await user.save();
  res.json({
    message: "Data successfully added ",
    user,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
