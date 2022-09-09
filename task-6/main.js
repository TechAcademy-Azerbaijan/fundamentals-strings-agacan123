const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let n = result.input
  let count = 0
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
   if ((element ==  " " || element=="!"  || element == "," )&& n[i+1]!== " ") {
    count++
    
   }
        
    
  }
    console.log(count);
  

  
});
