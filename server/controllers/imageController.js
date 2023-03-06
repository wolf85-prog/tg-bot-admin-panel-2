//const getFilePath = require('./../utils/file.js')
// import onError from './../utils/onError.js'
// import upload from './../utils/upload.js'
const ApiError = require('../error/ApiError')
const path = require('path')

class ImageController {

    //Обрабатываем загрузку файлов:
    async uploadFile(req, res) {

        try {
            // if (!req.file) return res.sendStatus(400)

            // // формируем относительный путь к файлу
            // const relativeFilePath = req.file.path
            //     .replace(/\\/g, '/')
            //     .split('server/files')[1]

            // // и возвращаем его
            // res.status(201).json(relativeFilePath)

            let filedata = req.file;
 
            console.log(filedata);
            if(!filedata)
                res.send("Ошибка при загрузке файла");
            else
                res.send("Файл загружен");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Обрабатываем получение файлов:
    async getImage(req, res) {
        // try {
        //     // формируем абсолютный путь к файлу
        //     const filePath = getFilePath(req.url)           
        //     // и возвращаем файл по этому пути
        //     //res.status(200).sendFile(filePath)
        //     return res.status(200).sendFile(filePath);
        // } catch (error) {
        //     return res.status(500).json(error.message);
        // }
    }
}

module.exports = new ImageController()