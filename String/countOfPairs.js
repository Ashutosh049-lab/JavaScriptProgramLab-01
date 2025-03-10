
function countSuchPair(N,arr){
    //write your code here
    
    let count =0;
    
    for(let i=0;i<N;i++){
      
      for(let j=i+1;j<N;j++){
        
        let sum=arr[i]+arr[j];
        if(isPrime(sum)){
          count++;
        }
      }
    }
    console.log(count)
    
    function isPrime(n){
      
      if(n<=1){
        return false;
      }
      
      for(let i=2;i<n;i++){
        
        if(n%i==0){
          return false;
        }
      }
      
      return true;
    }
  }

  let N=5;
  let arr=[1,2,3,4,5]// output=5
  countSuchPair(N,arr)