const express = require('express')
var cors = require('cors')
const app =express()

app.use(cors())

app.get('/' ,(req, res)=>{
  res.send('hello rohit how are you')
})



app.listen(4000 , ()=>{
  console.log( 'http://localhost:4000')
})