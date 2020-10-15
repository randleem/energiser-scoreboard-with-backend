// db config
const { Pool } = require("pg");

const pool = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
});

// export query function for use in app
module.exports = {
  query: (sql, values, callback) => {
    return pool.query(sql, values, callback);
  },
};
