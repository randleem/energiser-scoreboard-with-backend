const { query } = require("../db/index");

async function addUser(firstName, lastName, userName) {
    const result = await query("INSERT INTO users (first_name, second_name, user_name) VALUES ($1, $2, $3) RETURNING user_id;", [firstName, lastName, userName]);
    console.log(result.rows[0].user_id)
    return result.rows[0].user_id;
    };

async function addGame(date, gamePlayed, user_id, wins, points ) {
    const result = await query("INSERT INTO games (date, game_played, user_id, wins, points ) VALUES ($1, $2, $3, $4, $5) RETURNING game_id;", [date, gamePlayed, user_id, wins, points]);
    console.log(result);
    return result.rows[0].game_id;
    };

async function getAllUsers() {
    const result = await query("SELECT * FROM users;");
    console.log(result.rows);
    return result.rows;
    };

async function getAllWins() {
    const result = await query("SELECT * FROM games;");
    console.log(result.rows);
    return result.rows;
    };

async function getTop5() {
    const result = await query("SELECT SUM(wins) AS total_wins, CONCAT(first_name, ' ', second_name) AS name FROM users INNER JOIN games ON users.user_id = games.user_id GROUP BY name ORDER BY total_wins DESC LIMIT 5;");
    console.log(result.rows);
    return result.rows;
    };

async function getPictionaryTop5() {
    const result = await query("SELECT first_name, SUM(wins) AS total_wins, SUM(points) AS total_points FROM users INNER JOIN games ON users.user_id = games.user_id WHERE game_played = 'pictionary' GROUP BY first_name ORDER BY total_wins DESC LIMIT 5;");
    console.log(result.rows);
    return result.rows;
    };

async function getMindTop5() {
    const result = await query("SELECT first_name, SUM(wins) AS total_wins, SUM(points) AS total_points FROM users INNER JOIN games ON users.user_id = games.user_id WHERE game_played = 'mind' GROUP BY first_name ORDER BY total_wins DESC LIMIT 5;");
    console.log(result.rows);
    return result.rows;
    };

async function getScattergoriesTop5() {
    const result = await query("SELECT first_name, SUM(wins) AS total_wins, SUM(points) AS total_points FROM users INNER JOIN games ON users.user_id = games.user_id WHERE game_played = 'scattergories' GROUP BY first_name ORDER BY total_wins DESC LIMIT 5;");
    console.log(result.rows);
    return result.rows;
    };



// getAllWins();

module.exports = {
    addUser,
    addGame,
    getAllWins,
    getTop5,
    getPictionaryTop5,
    getMindTop5,
    getScattergoriesTop5,
    getAllUsers,
};

