const mongoose = require('mongoose')
require('dotenv').config()


async function db () {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('db connect')
    }).catch(err => console.log('database connection has problem', err))
}

module.exports = db