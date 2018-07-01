var fs = require('fs');
//写入文件
//arguments:路径，写入数据，回调函数
// fs.writeFile('./data.txt','hello world',function(err){
// 	if(err){
// 		console.log('写入文件错误')
// 	}else{
// 		console.log('写入文件成功')
// 	}
// })
//读取文件
//arguments:路径，回调函数
fs.readFile('./data.txt', 'utf-8',function(err,data){
	if(err){
		throw err
	}else{
		//console.log(Buffer.from(data,"utf-8"))
		console.log(Buffer.from(data.toString("utf-8")))
	}
})
//二进制格式
fs.readFile('./sample.png',function(err,data){
	if(err){
		throw err
	}else{
		console.log(data)
	}
})

var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
	console.log(2333)
}).listen(1337,'127.0.0.1');

