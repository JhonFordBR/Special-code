'use strict';
/*let counter = 0;

const interval = setInterval(function(){

  console.log(`iteration ${++counter}`)
  if(counter===7){clearInterval(interval);}
},3000);
*/
//process.stdin.on('data',function(data){
//console.log(data.toString());


//});
const server = require('http').createServer((req,res)=>{

if(req.url=='/'){
  res.setHeader('content-type','text/html');
  res.end(
    `<!Doctype html>
    <body>
    <h1>WATAFAK===error</h1>
    <p>watafak</p>
    </body>`




  )
}else{
  res.end(`UNKNOWN`)

}

}).listen(8080,()=>console.log('Started our server'));
