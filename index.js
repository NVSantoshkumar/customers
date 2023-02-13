let express = require("express");
let app = express();

app.use(express.json());

app.listen(8081, function () {
  console.log("Example app running");
});

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.get("/", function (req, res) {
  res.send("Hello ");
});

app.post("/saveEmp", function (req, res) {
  //  console.log(req.body.age)
  res.send(req.body.age.toString());
});
