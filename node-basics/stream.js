var fs=require("fs");
var filePath="./sample1.txt"
var readable=fs.createReadStream(filePath ,{encoding:"utf-8",highWaterMark : 16 * 1024})


var writable=fs.createWriteStream("./sample3.txt");
readable.on("data",function(chunk){         /*data is a pre-defined event*/
	console.log(chunk.length)
	writable.write(chunk)
})