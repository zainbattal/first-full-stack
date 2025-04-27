const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Uses the URL from environment
  ssl: { rejectUnauthorized: false },
});
module.exports = pool;
