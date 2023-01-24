const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    conversationId: {type: DataTypes.STRING},
    messageType: {type: DataTypes.STRING},      //тип сообщения;
    text: {type: DataTypes.STRING}, //текст сообщения;
    img: {type: DataTypes.STRING}, //путь к файлу;
    to: {type: DataTypes.STRING},
    from: {type: DataTypes.STRING},
    chatId: {type: DataTypes.STRING},
    is_bot: {type: DataTypes.BOOLEAN},
})

module.exports = {Message}