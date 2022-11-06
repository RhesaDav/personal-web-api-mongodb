const express = require('express')
const articleRoutes = require('./articleRoutes')
const userRouter = require('./userRoutes')
const rootRoutes = express.Router()

rootRoutes.use('/user', userRouter)
rootRoutes.use('/article', articleRoutes)

module.exports = rootRoutes