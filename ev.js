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
const p = require('./ports');

if(req.url=='/'){
  res.setHeader('content-type','text/html');
  res.end(
    `<!Doctype html>
    <body>
    <h1>${p.upper(__dirname)}</h1>
    <p>Hovo</p>
    </body>`




  )
}else{
  res.end(`UNKNOWN`)

}

}).listen(8080,()=>console.log('Started our server'));
