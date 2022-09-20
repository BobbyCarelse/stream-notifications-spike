const express = require('express')
const { GetStreamRouter } = require('./GetStream')

const AppRouter = express.Router()

AppRouter.use('/getstream', GetStreamRouter)

module.exports = { AppRouter }
