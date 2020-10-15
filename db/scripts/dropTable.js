const { query } = require("../index");

sqlDrop = "DROP TABLE games;"

async function dropTable() {
    const result = await query(sqlDrop);
    console.log(result);
  }

dropTable();