const next = require('next')
const express = require('express')
const router = require('./router')
const app = express()
const dotenv = require('dotenv')
const dev = false
const server = next({ dev })
const handle = server.getRequestHandler()
dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)
server.prepare()
.then(() => {
app.get('*',(req,res) => {
    return handle(req,res)
})
app.listen(3001,() => console.log(dev))
})
.catch(er => {
    console.error(er.stack)
})



module.exports = app
