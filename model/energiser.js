const { query } = require("../db/index");

async function addUser(firstName, lastName, userName) {
    const result = await query("INSERT INTO users (first_name, second_name, user_name) VALUES ($1, $2, $3) RETURNING user_id;", [firstName, lastName, userName]);
    console.log(result.rows[0].user_id)
    return result.rows[0].user_id;
  }

async function addGame(date, gamePlayed, user_id, wins, points ) {
    const result = await query("INSERT INTO games (date, game_played, user_id, wins, points ) VALUES ($1, $2, $3, $4, $5) RETURNING game_id;", [date, gamePlayed, user_id, wins, points]);
    console.log(result);
    return result.rows[0].game_id;
    }

async function getAllWins() {
    const result = await query("SELECT * FROM users;");
    console.log(result.rows);
    return result.rows;
    }

module.exports = {
    addUser,
    addGame,
    getAllWins,
};

//SELECT CONCAT(first_name, second_name) AS name, wins  FROM users INNER JOIN games ON user_id = user_id ORDER BY wins ASC;"