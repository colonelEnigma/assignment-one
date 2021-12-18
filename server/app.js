const express = require('express')
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoutes = require('./routes/posts');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('database connected')
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch(err=>
    console.log(`error while connecting DB`, err.message)
)
app.use(cors())
app.use(express.json())

app.use('/api/user', authRoute)
app.use('/api/user', userRoutes)

