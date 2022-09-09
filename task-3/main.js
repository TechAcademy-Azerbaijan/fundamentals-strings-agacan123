const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let n = result.input
   let count2 = 0
   let count5 = 0
   for (let i = 0; i < n.length; i++){
    const element = n[i]
    if (element==2){
count2++
    }
   }if (element==5){
    count5++

   }
   
  console.log(count);
 
  
});
