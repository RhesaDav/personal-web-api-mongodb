const mongoose = require('mongoose')

async function db () {
    await mongoose.connect('mongodb://127.0.0.1:27017/personal-blog').then(() => {
        console.log('db connect')
    }).catch(err => console.log('database connection has problem', err))
}

module.exports = db