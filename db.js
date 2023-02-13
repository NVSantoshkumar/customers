const { Pool } = require("pg");

const client = new Pool({
  user: "",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

async function excuteQuary(s) {
  const res = await client.query(s);
  return res;
}

module.exports = { excuteQuary };
