var http=require("http");
var server=http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text'})
response.end("hello world")
});


server.listen(4000,function()
{
	console.log("server is listening 4000");
	})
