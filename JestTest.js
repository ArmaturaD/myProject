

function basicOp(operation, value1, value2)
{
     if (typeof value1 === 'string'&& value2 === 'string') {
        return "OOPS some problems, there are two strings"
      }
       if (typeof value1 === 'string' || value2 === 'string') {
         return "OOPS some problems, there are one string"
       }
  if (operation === "+"){
  return value1 + value2;        
}
  if (operation === "-"){
  return value1 - value2;  
   }
   if (operation === "*"){
  return value1 * value2;  
   }
    if (operation === "/"){
  return value1 / value2;  
   }
}
module.exports = {
    basicOp
}
 console.log(basicOp("-","5","5"))