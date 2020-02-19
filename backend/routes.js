const express = require('express')
const devController = require('./src/controllers/DevController')
const likeController = require('./src/controllers/likeController')
const dislikeController = require('./src/controllers/dislikeController')

const router = express.Router()

router.post('/devs', devController.store )
router.post('/devs/:dev_id/likes', likeController.store )
router.post('/devs/:dev_id/dislikes', dislikeController.store)

module.exports = router