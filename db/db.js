// Pengguaan Mongodb database
const mongoose = require('mongoose')


// akses database mongoose dengan asyncrounus di folder db.js
const db = async() =>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB terkoneksi')
    } catch (error) {
        console.log('database yang anda gunakan Error');
    }
}

module.exports = {db}