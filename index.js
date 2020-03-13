// express 安装
// $npm init -y
// $cnpm i express -S
// 运行服务器
// $node index.js
const express = require("express");
const app = express();

// 加载dist静态文件
app.use(express.static("./dist"));

// 搭建一个简单服务器
app.get("/",(req,res)=>{
    res.send("hello world vue.js");
})

app.listen(3000,()=>{
    console.log("请访问：http://127.0.0.1:3000");
	console.log("请访问：http://127.0.0.1:3000/index.html");
})