
function encryptIt(S,K) {
    // write code here
    let result="";
    
    for(let i=0;i<S.length;i++){
      
      let val=S.charCodeAt(i);
      
      if(val >=48 && val <=57){
        result=result+String.fromCharCode((val -48+K)%10+48)
      }else if((val >=65 && val <=90)){
        result +=String.fromCharCode((val-65+K)%26+65)
      }else if((val >=97 && val<=122)){
        result +=String.fromCharCode((val-97+K)%26+97)
      }else{
        result +=S[i]
      }
    }
    
    console.log(result)
    
}

let str="All-convoYs-9-be:Alert1."
let k=4;
encryptIt(str,k)