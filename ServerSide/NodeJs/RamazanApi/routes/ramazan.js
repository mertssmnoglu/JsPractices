const router = require('express').Router()
const ramazanController = require('../controllers/ramazan')

router.get('/:il', ramazanController.times)
router.get('/kalan/:il', ramazanController.remaining)

module.exports = router
