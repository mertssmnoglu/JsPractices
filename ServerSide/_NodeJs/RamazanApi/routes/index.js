const router = require('express').Router()
const ramazanRouter = require('./ramazan')

router.use('/ramazan', ramazanRouter)
router.use('/ramazan/kalan:il', ramazanRouter)

module.exports = router
