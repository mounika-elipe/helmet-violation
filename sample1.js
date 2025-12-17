var http=require('https');
http.createServer(req,res){
	res.writeHead(200,{'content-type':'html/txt'});
	res.write('<b>my http module</b><br>');
	res.write('the date nd time' +Date()+ 'currently');
	res.write('req.url');
	res.end();
)};listen(4000);