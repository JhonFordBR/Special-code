'use strict';
const myasnik = function(arr){
const arra = [];
for(let i of arr){

  arra.push(i.toUpperCase());
  console.log(i)
}

return arra;
}
const res = myasnik(['es ','du','na']);
console.log(res);
