const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const PORT = process.env.PORT 

app.get('/',(req,res)=>{
    res.send('hello this is home page')
})

app.get('/about',(req,res)=>{
    res.send('Hello world !! this is about page. ')
})


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})