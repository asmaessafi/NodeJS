var fs= require('fs')
var content = "Hello Node"
fs.writeFile('welcome.txt',content,function (err) {
    if(err){
        console.log(err);
    }
    console.log('File created and content written successfully!');
})


var buf=new Buffer.alloc(1024);
fs.open('./hello.txt','r' ,function (err,fd) {
    console.log("Going to open the file");
    if(err){
        console.log(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");

    fs.read(fd,buf,0,buf.length,0,function (err) {
        if(err){
            console.log(err);
        }
        console.log(buf.toString());
        
    })
})
