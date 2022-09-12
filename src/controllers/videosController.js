const database = require('../../models')


class VideosController {

    static async getVideos(req, res) {
        console.log('funcionando');
        try {
            const fhui = await database.Videos.findAll()
            return res.status(200).json(fhui)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async postVideos(req, res) {
        const body = req.body
        try {
            const saveVideo = await database.Videos.create(body)
            return res.status(200).json(saveVideo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async putVideo(req, res){
        const {id} = req.params
        const body = req.body

        try {
            await database.Videos.update(body, {where:{id:id}})
            const getUpdate = await database.Videos.findAll({where:{id:id}})
            return res.status(200).json(getUpdate)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteVideo(req, res){
        const {id} = req.params
        try {
            await database.Videos.destroy({where: {id: id}})
            return res.status(200).json({mensagem: `video com o id: ${id} deletado`})
        } catch (error) {
            
        }
    }

}

module.exports = VideosController