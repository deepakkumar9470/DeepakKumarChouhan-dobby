require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db');
const PORT = process.env.PORT || 8000
const cors = require('cors');
const authRoute = require('./routes/auth');
const imageRoute = require('./routes/upload')
const axios= require('axios')

app.use(express.json())
app.use(express.urlencoded({extended:  true}))
app.use(cors());

// Serving static file
app.use(express.static('public/uploads/photo'));

app.use('/api/auth', authRoute);
app.use('/api/images', imageRoute);

connectDB()

app.get('/',(req,res)=>{
     res.send('Hello Image app')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
});


