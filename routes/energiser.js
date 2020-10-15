var express = require('express');
var router = express.Router();

const { addUser, addGame, getAllWins, getTop5, getPictionaryTop5 } = require("../model/energiser.js");

/* GET home page. */

router.get("/", async function (req, res) {
  const scoreBoard = await getAllWins();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getTop5", async function (req, res) {
  const scoreBoard = await getTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.get("/getPicionaryTop5", async function (req, res) {
  const scoreBoard = await getPictionaryTop5();
  res.json({ success: true, payload: scoreBoard });
});

router.post("/", async function (req, res) {
  const {firstName, lastName, userName} = req.body;
  const id = await addUser(firstName, lastName, userName);
  console.log(id);
  res.json({ success: true, message: `Congratulations ${firstName} you've been added as a user with iD: ${id}, please keep safe for future identification` });
});

router.post("/game", async function (req, res) {
  const {date, gamePlayed, userId, wins, points} = req.body;
  const id = await addGame(date, gamePlayed, userId, wins, points);
  console.log(id);
  res.json({ success: true, message: `Congratulations ${userId} you're game has been added to the Scoreboard iD: ${id}` });
});


module.exports = router;
