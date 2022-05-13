const pool = require('../dbconfig')

class Answer {
    static getAnswers() {
        return pool.query('SELECT * FROM answers ORDER BY id ').then(results => { return results.rows}) 
    }

    static getSingleAnswer(id) {
        return pool.query("SELECT * FROM answers WHERE id = $1", [id]).then(results => { return results.rows[0]})
    }

    static createAnswers(content) {
        return pool.query("INSERT INTO answers (content) VALUES ($1) RETURNING content ", [content]).then(results => { return results.rows[0]})
    }

    static deleteAnswer(id) {
        return pool.query("DELETE FROM answers WHERE id = $1", [id]).then(results => { return results.rows})
    }

    static updateAnswer(id, update) {
        return pool.query(`UPDATE answers SET completed = ${update} WHERE id = $1`, [id]).then(results => { return results.rows})
    }

    static updateAnswerPut(id, content) {
        return pool.query(`UPDATE answers SET content = ${content} WHERE id = $1`, [id]).then(results => { return results.rows})
    }
}

module.exports = Answer