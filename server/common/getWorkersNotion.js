//notion api
require("dotenv").config();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseWorkerId = process.env.NOTION_DATABASE_WORKERS_ID

//получить id блока заданной страницы по id
module.exports = async function getWorkersNotion() {
    try {

        const responseResults = response.results.map((page) => {
            return {
               id: page.id,
               fio: page.properties.Name.title[0]?.plain_text,
               tgId: page.properties.Telegram.number
            };
        });

        let results = []

        let data = await notion.databases.query({
            database_id: databaseWorkerId
        });

        results = [...data.results]

        while(data.has_more) {
            data = await notion.databases.query({
                database_id: databaseWorkerId,
                start_cursor: data.next_cursor,
            }); 

            results = [...results, ...data.results];
        }

        const workers = results.map((worker) => {
            return {
               id: worker.id,
               fio: worker.properties.Name.title[0]?.plain_text,
               tgId: worker.properties.Telegram.number
            };
        });

        return workers;
    } catch (error) {
        console.error(error.message)
    }
}