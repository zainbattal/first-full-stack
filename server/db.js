const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "zezo2009zezo",
  host: "localhost",
  port: 5432,
  database: "test",
});
module.exports = pool;
