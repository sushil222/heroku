const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv').config();
const app =express()

const port =process.env.PORT ||4000

app.use(cors())

app.get('/' ,(req, res)=>{
  res.send('hello rohit how are you')
  console.log(process.env.PACK)
})



app.listen(port , ()=>{
  console.log( 'http://localhost:4000')
})