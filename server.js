const express = require('express')
var cors = require('cors')
require('dotenv').config()
const app =express()

const port =process.env.port ||4000

app.use(cors())

app.get('/' ,(req, res)=>{
  res.send('hello rohit how are you')
})



app.listen(port , ()=>{
  console.log( 'http://localhost:4000')
})