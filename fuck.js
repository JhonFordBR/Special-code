'use strict';
const net = require('net');
const  sock = new net.Socket;
const funct =  (dataz) => {
const head = dataz.split('\r\n\r\n');

const smth = {
  header :  head[0].split('\r\n'),
    body  : head[1]
}//smth finish



  }//funct finish
  
sock.on('connect',() => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('HOST :istc.am');
  sock.write('\r\n\r\n');

});
sock.setEncoding('utf-8');
const total_data = [];
sock.on('data',d => total_data.push(d));



sock.on('end',() =>{

const splitin =  total_data.reduce(  (prev,total) => prev + total );
funct(splitin);


});


sock.connect({
  port:80,
  host:'istc.am'
});
