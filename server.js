const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const { connectDB } = require("./models")
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


// Routes
app.use('/api/auth', require('./ruotes/authRoutes'));

app.get('/', (req, res) => res.send('API Running...'));

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    })
})