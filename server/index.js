const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

const PORT = process.env.PORT 

const data = []
const userData = []

app.get('/',(req,res)=>{
    res.send('hello this is home page')
})

app.get('/about',(req,res)=>{
    res.send('Hello world !! this is about page. ')
})

app.post('/data',(req,res)=>{
    const bookdata ={ 
        title:req.body.title,
        author:req.body.author
    }
    data.push(bookdata)
    res.redirect('/getData')

})

app.post('/register',(req,res)=>{
    const userInfo = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    }

    userData.push(userInfo)
    console.log(userData)
})

app.get('/getData',(req,res)=>{
    res.json(data)
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})