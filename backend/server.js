require("dotenv").config();
const express = require("express");
const app = express();
const colors = require("colors");

// everytime a req is made this middleware will show req path and req method
app.use ((req,res,next) => {
   console.log(req.path, req.method);
   console.log('hellow')
    next();
})
app.get("/", function (req, res) {
  // res.json('Hello World!'); // works
  res.json({ message: "Hello World!" });
});

//listen for request
const PORT = process.env.PORT || 4000;
app.listen(PORT, function portRunner() {
  console.log(
    "server is running on port".green + PORT.inverse.green,
    this.address().port.toString().red
  );
});
