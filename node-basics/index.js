/*var fs=require("fs")

var filepath="./sample.txt"
console.log("start reading file")
var data=fs.readFileSync(filepath);
console.log(data.toString())
console.log("Done reading file")                          //syncronous call
*/



 var fs=require("fs")                                          //asyncronous call
var filepath="./sample.txt"
console.log("start reading file")
var data=fs.readFile(filepath ,function(err,data){

	if(err){
		console.log(err)
	}
	console.log(data.toString());
	console.log("start writing file")
	fs.writeFile('./output2.txt',data,function(err)
	{
		if(err){
			throw err;
			console.log(err)
		}
	})
})