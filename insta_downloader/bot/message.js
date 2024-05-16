const {bot} = require('./bot')

const {download_video} = require('./helpers/download')
const {start} = require('./helpers/start')
const {contact} = require('./helpers/contact')

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text == '/start') {
        start(chatId)
    } else if (text == '/contact') {
        contact(chatId)
    } else {
        download_video(text, chatId)
    }
})