
function stringValue(S) {
    //write code here
    let sum=0;
    
    for(let i=0;i<S.length;i++){
      
      sum=sum+S[i].charCodeAt()-96
    }
    console.log(sum)
  
  }

  let str="aba"  //1+2+1=4 output
  stringValue(str)