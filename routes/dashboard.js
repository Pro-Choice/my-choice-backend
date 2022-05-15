const router = require("express").Router();
const { query } = require("express");
const pool = require("../db");
const authorization = require("../middleware/authorization");

//Get user's information and all of user's questions
router.get("/", authorization, async (req, res) => {
  try {
    const userData = await pool.query(
      "SELECT username, first_name, last_name, bio FROM users WHERE id = $1",
      [req.user]
    );
    const userQuestions = await pool.query(
      "SELECT * FROM questions WHERE user_id = $1",
      [req.user]
    );
    const userInfo = {
      userData: userData.rows[0],
      userQuestions: userQuestions.rows,
    };
    res.json({ userInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

//Get all answers for a question
router.get("/questions/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const answers = await pool.query(
      "SELECT * FROM answers WHERE question_id = $1",
      [id]
    );
    if (answers.rows.length !== 0) {
      res.json(answers.rows);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

//Post a question
router.post("/", authorization, async (req, res) => {
  try {
    const { question } = req.body;
    const postQuestion = await pool.query(
      "INSERT INTO questions (content, user_id) VALUES ($1, $2) RETURNING *",
      [question, req.user]
    );
    res.json(postQuestion.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

module.exports = router;
