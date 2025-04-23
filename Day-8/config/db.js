// getting-started.js
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://raiTechie28:JbK4oN7XFzuGSzRC@cluster0.wjwuvih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;
