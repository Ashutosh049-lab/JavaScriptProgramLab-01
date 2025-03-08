
function stringPrime(N , str){
    // Write code here
    let count=0;
    
       for(let i=0;i<N;i++){
        let bag="";
        
        for(let j=i;j<N;j++){
          bag+=str[j];
         // console.log(bag.length)
          
          if(isPrime(bag.length)){
           // console.log(bag.length)
            count++
          }
        }
      }
    
    console.log(count)
    
    
    
    function isPrime(len){
      
      if(len <=1){
        return false
      }
      for(let i=2;i<len;i++){
        
        if(len%i==0){
          return false;
        }
      }
      
      return true;
    }
}
let N=6
let str="abcdef"
stringPrime(N,str)

