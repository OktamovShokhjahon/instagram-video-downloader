const {bot} = require('../bot')

const start = (chatId) => {
    bot.sendMessage(chatId, `Assalomu alaykum 👋 \n\nSiz bu telegram bot orqali instagram video va post larni tezda yuklab olishingiz mumkin!\n\nBotni ishlatish uchun post havolasini jo'nating 👇`)
}

module.exports = {start}