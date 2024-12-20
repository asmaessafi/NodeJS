var http=require('http');
var server=http.createServer(function (req,res) {
    if (req.url === '/favicon.ico') { 
        res.writeHead(204, { 'Content-Type': 'image/x-icon' }); 
        res.end(); 
        return;
        }
    console.log('request was made:'+req.url);
    res.writeHead(200,{'content-type':'text'})
    res.end('<h1>Hello Node!!!!</h1>\n')
})
server.listen(3000,'127.0.0.1')
console.log('now listening to port 3000!')
