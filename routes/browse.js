const router = require('express').Router();
const { query } = require('express');
const pool = require("../db")
const authorization = require("../middleware/authorization")


router.get("/", authorization, async (req,res) => {
    try {
        const questions = await pool.query("SELECT * FROM questions")
        res.json(questions.rows)
    } catch (error) {
        console.error(error);
        res.status(500).json("server error");
    }
})

router.get("/questions/:id", authorization, async(req, res) => {
    try {
        const {id} = req.params
        const answers = await pool.query("SELECT * FROM answers WHERE question_id = $1", [id])
        if(answers.rows.length !== 0 ) {
            res.json(answers.rows)
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json("server error");
    }
})

module.exports = router;