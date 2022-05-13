const questionModel = require("../models/questionModel");

class QuestionController {
  static async getQuestions(req, res) {
    const question = await questionModel.getQuestionFromDB();
    res.send(question);
  }
  static async getSingleQuestion(req, res) {
    const id = req.params.id;
    const question = await questionModel.getSingleQuestionFromDB(id);
    res.send(question);
  }
  
  static async createQuestion(req, res) {
    const { userId, content } = req.body;
    const newQuestion = await questionModel.createQuestionFromDB(userId, content);
    return res.send(newQuestion);
  }
}

module.exports = QuestionController;
