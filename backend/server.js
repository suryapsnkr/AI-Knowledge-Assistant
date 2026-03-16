
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const askRoute = require('./routes/ask')
const uploadRoute = require('./routes/upload')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use('/api/ask', askRoute)
app.use('/api/upload', uploadRoute)

app.listen(5000, ()=>{
  console.log("Server running on port 5000")
})
