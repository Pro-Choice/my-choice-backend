const db = require("../db/db");

class AnswersModel {
  static getAnswersFromDB() {
    return db.select().from("answers").orderBy("created_at", "desc");
  }
  static getSingleAnswersFromDB(id) {
    return db.select().from("answers").where({ id })
  }
  static createAnswersFromDB(user_id, body) {
    return db("answers").insert({ content, user_id }).returning(["id", "content"]);
  }
}

function getCurrentDateJson() {
    return new Date().toJSON();
  }

module.exports = AnswersModel;
