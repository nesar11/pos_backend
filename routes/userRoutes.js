const express = require('express')
const user = require('../controllers/userController')
const router = express.Router();
const auth = require('../middlewares/authGuard')


router.post('/register', user.register)

router.post('/login', user.login)

router.get('/index', auth.authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

module.exports = router