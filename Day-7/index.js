const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("Path ABC");
});

app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  console.log(a, b);
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
  res.send(sum);
});

app.post("/abcPost", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  console.log(a, b);
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
  res.send("Method Post :" + sum);
});

app.get("/multiply", (req, res) => {
  res.send("Path product");
});

app.get("/getData", (req, res) => {
  res.json({
    success: true,
    message: "Data fetched",
    myData: data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const data = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
];
