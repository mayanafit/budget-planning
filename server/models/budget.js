const db = require(`../config`);
const Budget = db.collection(`budgets`);
  
class BudgetModel {

    static findAll(userId) {
        return Budget.find({userId}).toArray();
    }

    static insertOne(newBudget) {
        return Budget.insertOne(newBudget)
    }

    static deleteAll() {
        return Budget.deleteMany({})
    }
    
}

module.exports = BudgetModel