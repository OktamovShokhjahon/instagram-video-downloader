const {bot} = require('../bot')

const contact = (chatId) => {
    bot.sendMessage(chatId, `Admin: @Thom_a_s1\nDasturchi: @OktamovShohjahon`)
}

module.exports = {contact}