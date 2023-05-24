const UserBot = require('../workers/UserBot')
const ApiError = require('../error/ApiError')

class WuserbotController {


    async editUserWorker(req, res) { 
        const {id} = req.params      
        try {    
            let exist=await UserBot.findOne( {where: {chatId: id}} )
            
            if(!exist){
                res.status(500).json({msg: "user not exist"});
                return;
            }

            const {username} = req.body

            const newUser = await UserBot.update(
                { username },
                { where: {chatId: id} })
            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getUserWorkers(req, res) {
        try {
            const users = await UserBot.findAll()
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getUserWorker(req, res) {
        const {id} = req.params
        try {
            const userbot = await UserBot.findOne({where: {chatId: id}})
            return res.status(200).json(userbot);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = new WuserbotController()