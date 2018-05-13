var fs = require('fs')

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
		console.log(data)
	}
})