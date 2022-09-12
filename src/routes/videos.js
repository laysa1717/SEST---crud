const { Router } = require('express')
const videoController = require('../controllers/videosController.js')

const router = Router()

router.get('/getVideos', videoController.getVideos)
router.post('/createVideos', videoController.postVideos)
router.put('/updateVideo/:id', videoController.putVideo)
router.delete('/deleteVideo/:id', videoController.deleteVideo)

module.exports = router