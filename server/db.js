const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Uses the URL from environment
});
module.exports = pool;
