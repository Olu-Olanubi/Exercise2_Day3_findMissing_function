/*This function takes in two arrays,
and finds the missing element in one of the arrays

First, both arrays are sorted, so that the missing
element will lie either at the first index
or the last index. 
Then this condition is tested for */

var findMissing = function(a, b){
  

  a.sort();
  b.sort();
  if (a.length > b.length){
    if (a[0] === b[0]){
      return a[a.length - 1];
    }
    return a[0];
  }
  
  else if(b.length > a.length){
    if (b[0] === a[0]){
      return b[b.length - 1];
    }
    return b[0];
  }
    
  return 0;
  
}


module.exports = findMissing;