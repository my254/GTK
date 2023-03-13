const express = require('express')
const router = express.Router()
const controll = require('./Controll')


//user related routes
router.post('/send', controll.send)
router.post('/subscribe', controll.subscribe)

module.exports = router