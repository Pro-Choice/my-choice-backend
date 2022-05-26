const router = require("express").Router();
const { query } = require("express");
const pool = require("../db");
const authorization = require("../middleware/authorization");

//Get user's information and all of user's questions
router.get("/", authorization, async (req, res) => {
  console.log(req.user)
  try {
    const userData = await pool.query(
      "SELECT username, first_name, last_name, bio FROM users WHERE user_id = $1",
      [req.user]
    );
    const userQuestions = await pool.query(
      "SELECT * FROM questions JOIN users ON questions.user_id = users.user_id WHERE users.user_id = $1",
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
    console.log(req.body)
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

//Delete a question 

router.delete("/questions/:id", async(req, res) => {
  try {
    const {id} = req.params;
    console.log(id)
    pool.query("DELETE FROM answers WHERE answers.question_id = $1", [id])
    const deletedQuestion = await pool.query("DELETE FROM questions WHERE question_id = $1 RETURNING *", [id])
    res.json(deletedQuestion.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json("server error")
  }
})

//Update profile info
router.put("/", authorization, async (req, res) => {
  try {
    console.log(req.body)
    const { first_name, last_name, bio } = req.body;
    const updateBio = await pool.query(
      "UPDATE users SET first_name = $1,  last_name = $2, bio = $3 WHERE user_id = $4 RETURNING *",
      [first_name, last_name, bio, req.user]
    );
    res.json(updateBio.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

module.exports = router;
