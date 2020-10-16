var express = require('express');
var router = express.Router();

const { addUser, addGame, getAllWins, getTop5, getPictionaryTop5, getMindTop5, getScattergoriesTop5, getAllUsers } = require("../model/energiser.js");

/* GET home page. */

router.get("/users", async function (req, res) {
  const scoreBoard = await getAllUsers();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/", async function (req, res) {
  const scoreBoard = await getAllWins();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getTop5", async function (req, res) {
  const scoreBoard = await getTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getPictionaryTop5", async function (req, res) {
  const scoreBoard = await getPictionaryTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getMindTop5", async function (req, res) {
  const scoreBoard = await getMindTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getScattergoriesTop5", async function (req, res) {
  const scoreBoard = await getScattergoriesTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.post("/", async function (req, res) {
  const {first_name, second_name, user_name} = req.body;
  const id = await addUser(first_name, second_name, user_name);
  console.log(id);
  res.json({ success: true, userId: id });
});

router.post("/game", async function (req, res) {
  const {date, gamePlayed, userId, wins, points} = req.body;
  const id = await addGame(date, gamePlayed, userId, wins, points);
  console.log(id);
  res.json({ success: true, message: `Congratulations ${userId} you're game has been added to the Scoreboard iD: ${id}` });
});


module.exports = router;
