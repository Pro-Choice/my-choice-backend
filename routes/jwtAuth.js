const pool = require("../db")
const router = require("express").Router();
const bcryt = require("bcrypt")
const jwtGenerator =  require("../util/jwtGenerator")

const validInfo = require("../middleware/validInfo")

const authorization = require("../middleware/authorization")

console.log(pool)

router.post("/register", validInfo, async(req, res) => {
    try {
        const {email, password, username} = req.body; 

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        
        if(user.rows.length !== 0) {
            return res.status(401).send("user already exists")
        }
        
        const saltRounds = 10;
        const salt = await bcryt.genSalt(saltRounds)

        const bcrytPassword = await bcryt.hash(password, salt)

        const newUser = await pool.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *", [email, username, bcrytPassword])

        const token = jwtGenerator(newUser.rows[0].id)
        res.json({token})

    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})

router.post("/login", validInfo, async(req, res) => {
    try {
        const {email, password} = req.body; 

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])

        if(user.rows.length === 0) {
            res.status(401).json("password or email is incorrect")
        }

        const validPassword = await bcryt.compare(password, user.rows[0].password);

        if(!validPassword) {
            res.status(401).json("password or email is incorrect")
        }
        const token = jwtGenerator(user.rows[0].id)

        res.json({token})

    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

router.get("/is-verified", authorization, async(req, res) => {
    try {
        res.json(true)
    } 
    catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

module.exports = router;