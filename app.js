const express=require('express');
const app=new express();
const path=require('path');
const bodyParser=require('body-parser');
const querystring=require('querystring');

//引入数据库
const db=require('./models/mongoose.js');
app.use('/public',express.static(path.join(__dirname,'./public')))

// 通过bodyparser 解析post请求中的 x-www-formurlendcolde
app.use(bodyParser.urlencoded({ extended: false }))

// 通过bodyparser 解析post请求中的 json格式
app.use(bodyParser.json());



// app.use('/api',require('./routers/api'));


app.listen(3000,()=>{
    console.log('server start in port'+3000);
})

