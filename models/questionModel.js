const db = require("../db/db");

class QuestionModel {
  static getQuestionFromDB() {
    return db.select().from("question").orderBy("created_at", "desc");
  }
  static getSingleQuestionFromDB(id) {
    return db.select().from("question").where({ id })
  }
  static createQuestionFromDB(user_id, body) {
    return db("questions").insert({ content, user_id }).returning(["id", "content"]);
  }
}

function getCurrentDateJson() {
    return new Date().toJSON();
  }

module.exports = QuestionModel;