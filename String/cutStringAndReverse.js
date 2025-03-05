
function stringCut(str){
    //write code here
    let n=str.length;
    
    
   
    if(n%2 !==0){
    let str1=reverse(str.substring(0,n/2));
    let str2=reverse(str.substring(n/2+1,n));
    
    console.log(str1+str[Math.floor(n/2)]+str2)
    }else{
        let str1=reverse(str.substring(0,n/2));
        let str2=reverse(str.substring(n/2,n));
    
    console.log(str1+str2) 
    }
    function reverse(str){
     
      let rev=""
      for(let i=str.length-1;i>=0;i--){
        rev +=str[i];
      }
      return rev;
    }
}

let str1="abcxyz";
let str2="abcde";
stringCut(str1);
stringCut(str2);