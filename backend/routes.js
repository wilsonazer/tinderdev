const express = require('express')
const devController = require('./src/controllers/DevController')

const router = express.Router()

router.post('/post', devController.store )


module.exports = router