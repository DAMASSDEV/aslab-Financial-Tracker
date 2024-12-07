
const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const {readdirSync} = require('fs')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT

// perangkat
app.use(express.json());
app.use(cors());

// cek LOCAL HOST di folder app ini
app.get('/', (req, res) =>{
    res.send("hello world!");
})

// router
readdirSync('./router').map((router) => app.use('/api/v1', require('./router/' + router)))


const server = () => {
   
    db()
    app.listen(PORT, () => {
        console.log("sedang menggunakan :", PORT)
    })
}
server()