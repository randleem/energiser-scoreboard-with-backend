const { query } = require("../index");

// run query to make table
const sqlUsers = `
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    second_name TEXT,
    user_name TEXT
);`;

async function createUserTable() {
  const result = await query(sqlUsers);
  console.log(result);
}

// createUserTable();

const sqlGames = `
CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    date DATE,
    game_played TEXT,
    user_id TEXT,
    wins INTEGER,
    points INTEGER
);`;

async function createGameTable() {
    const result = await query(sqlGames);
    console.log(result);
  }

createGameTable();

  