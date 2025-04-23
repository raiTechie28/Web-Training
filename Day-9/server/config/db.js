const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://bbibekrrai:aogGU1wDrk7QqoF8@cluster0.l0oo17q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("db connection working");
  })
  .catch((err) => {
    console.log("Db Error :", err);
  });
