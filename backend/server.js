require('dotenv').config()
const express = require("express");
const app = express();
const colors = require("colors");

app.get('/', function (req, res) {
    // res.json('Hello World!'); // works
    res.json({message: 'Hello World!'});
})

//listen for request
app.listen(4000, function portRunner() {
  console.log(
    "server is running on port 4000".inverse.green,
    this.address().port.toString().red
  );
});
