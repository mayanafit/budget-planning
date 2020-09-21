const router = require('express').Router()
const BudgetController = require('../controllers/BudgetController');

router.get('/', BudgetController.findAll)
router.post(`/`, BudgetController.insertOne)
router.delete(`/`, BudgetController.deleteAll)
module.exports = router;