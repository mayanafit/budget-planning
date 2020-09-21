const BudgetModel = require('../models/budget');

class BudgetController {

    static async findAll(req, res) {
        const userId = req.userId
        try {
            const budgets = await BudgetModel.findAll(userId)
            return res.status(200).json(budgets)
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

    static async insertOne(req, res) {
        const {desc, amount} = req.body 
        const userId = req.userId
        try {
            if (!desc) return res.status(400).json({ "message": "description cannot be empty." })
            else if (!amount) return res.status(400).json({ "message": "amount cannot be empty" })
            const newBudget = {
                desc,
                amount: +amount,
                date: new Date(),
                userId
            }
            const addedBudget = await BudgetModel.insertOne(newBudget)
            return res.status(201).json(addedBudget.ops[0])
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

    static async deleteAll(req, res) {
        try {
            const status = await BudgetModel.deleteAll()
            if (status.result.ok) return res.status(200).json({"message": 'successfully delete all data.'})
            return res.status(404).json({"message": "no data can be found."})
        } catch (error) {
            return res.status(500).json({ "message": error })
        }
    }

};

module.exports = BudgetController;