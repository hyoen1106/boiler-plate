const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suhyeon:abcd1234@cluster0.kniot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ㅎㅎ 하이~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
