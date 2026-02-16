const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.send(`สวัสดี ${username} พี่เต้สุดหล่อ  รวยไม่ไหวแล้ววว เยสแม่่่่`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
