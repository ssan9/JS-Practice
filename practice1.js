//fibonacci sequence

function fib(n) {
  let result = [];
  
  for(let i = 0; i<n; i++) {
    if(i === 0) {
      result.push(0);
    }
    else if(i === 1) {
      result.push(1);
    }
    else{
       result.push(result[i-2] + result[i-1])
    }   
  }
  return result;
}

  