const { Pool } = require("pg");

const pool = new Pool({
  user: "",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

function excuteQuary() {
  pool.query("SELECT * from customer", (err, res) => {
    console.log(err, res);
  });
}

module.exports = excuteQuary;
