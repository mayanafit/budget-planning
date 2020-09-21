const router = require(`express`).Router();
const userRoutes = require(`./user`);
const budgetRoutes = require(`./budget`);
const authentication = require(`../middleware/auth`);

router.use(`/users`, userRoutes)
router.use(authentication)
router.use(`/budgets`, budgetRoutes)

module.exports = router