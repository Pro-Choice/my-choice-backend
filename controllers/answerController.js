const answerModel = require("../models/questionModel");

class AnswerController {
  static async getAnswe(req, res) {
    const answer = await answerModel.getAnswerFromDB();
    res.send(answer);
  }
  static async getSingleAnswer(req, res) {
    const id = req.params.id;
    const answer = await answerModel.getSingleAnswerFromDB(id);
    res.send(answer);
  }
  static async createAnswer(req, res) {
    const { userId, content } = req.body;
    const newAnswer = await answerModel.createAnswerFromDB(userId, content);
    return res.send(newAnswer);
  }
}

module.exports = AnswerController;
