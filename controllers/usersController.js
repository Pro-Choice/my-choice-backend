const UserModel = require("../models/usersModel");
const bcrypt = require("bcryptjs");

class UsersContoller {
  static async getUsers(req, res) {
    const users = await UserModel.getUsersFromDB();
    res.status(200).send(users);
  }

  static async getSingleUser(req, res) {
    const id = req.params.id;
    const user = await UserModel.getSingleUserFromDB(id);
    res.status(200).send(user);
  }

  static async createUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).send("Insufficient information");
    }
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await UserModel.createUserFromDB(username, hashedPassword);
    return res.status(201).send(newUser);
  }

}

module.exports = UsersContoller;
