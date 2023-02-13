let express = require("express");
let server = express();

const calculate = require("./test1");

const test2 = require("./test2");

const x = require("./db");

server.use(express.json());

server.listen(8082, function () {
  console.log("Example app running");
});

server.post("/sum", function (req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let type = req.body.operation;
  let op = calculate(num1, num2, type);
  res.send(op.toString());
  test2.hello();
  test2.hai();
  x();
});
