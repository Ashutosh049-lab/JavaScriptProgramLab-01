
function reverseSubString(str){
     
    let n=str.length;
     
     
    let str1= revers(str.substring(0,n/2));
    let str2=revers(str.substring(n/2,n))
     
    console.log(n)
    console.log(str1+str2);
    
    
    function revers(str){
      let rev=""
      for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i]+""
      }
      return rev;
    }
   
  }
  
  let str="abcxyz";
  reverseSubString(str)
  
  