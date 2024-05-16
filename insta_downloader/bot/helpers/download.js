const {bot} = require('../bot')

const getData = async (url, chatId) => {
    const new_url = `https://instagram-videos.vercel.app/api/video?postUrl=${url}`

    bot.sendChatAction(chatId, 'typing');

    const req = await fetch(new_url)
    const res = await req.json()
    return res
}

const download_video = async (url, chatId) => {
    const request = getData(url, chatId)
        .then(data => {
            const status = data.status
            if (status == 'error') {
                bot.sendMessage(chatId, `Post uchun havola noto'g'ri kiritildi ❌`)
            } else {
                const res = data.data

                bot.sendVideo(chatId, res.videoUrl, {
                    caption: res.filename
                })
            }
        })
        .catch(err => console.log(err))
}

module.exports = {download_video}