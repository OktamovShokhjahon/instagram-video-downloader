const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const dev = () => {
    try {
        const PORT  = process.env.PORT || 4100
        app.listen(PORT, () => console.log(`App started in http://localhost:${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

dev()

require('./bot/bot')