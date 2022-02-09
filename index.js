const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require("./config/key");

//application/x-www-form-urlencoded 를 분석해서 가져올 수 있게 함
app.use(bodyParser.urlencoded({extended: true}));
//pplication/json 을 분석해서 가져올 수 있게 함
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ㅎㅎ 하이~ 노드몬이당~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/register', (req, res) => {

  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success: true
    })
  })
})