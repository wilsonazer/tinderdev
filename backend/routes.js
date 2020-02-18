const express = require('express')
const devController = require('./src/controllers/DevController')
const likeController = require('./src/controllers/likeController')

const router = express.Router()

router.post('/post', devController.store )
router.post('/devs/:dev_id/likes', likeController.store )

module.exports = router