// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;
// const home = fs.readFileSync('./index.html')
// const blogs = fs.readFileSync('./blogs.html')
// const about = fs.readFileSync('./about.html')
// const contact = fs.readFileSync('./contact.html')


// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(home);
// })

// server.listen(port, hostname, ()=> {
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

const express = require("express")
const app = express();
// const port = 3000;
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/blogs',function(req,res){
  res.sendFile(path.join(__dirname+'/blogs.html'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });

  
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

// app.get('/', (req,res)=> {
//     res.sendFile('./index.html')
// })
// app.get('/blogs', (req,res)=> {
//     res.sendFile('./blogs.html')
// })
// app.get('/about', (req,res)=> {
//     res.sendFile('./about.html')
// })
// app.get('/contact', (req,res)=> {
//     res.sendFile('./contact.html')
// })

// app.listen(port, ()=> {
//     console.log(`the application started successfully on port ${port}`)
// })