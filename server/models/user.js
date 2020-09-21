const db = require(`../config`);
const User = db.collection(`users`);
  
class UserModel {

    static findAll() {
        return User.find().toArray();
    }

    static findOne (value) {
        return User.findOne(value)
    }

    static insertOne(newUser) {
        return User.insertOne(newUser)
    }
    
}

module.exports = UserModel