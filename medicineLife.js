
function medicineOfLife(N,K,arr){
    // Write your code here!
      
      for(let i=0;i<N-1;i++){
        
        for(let j=i+1;j<N;j++){
          
         if(arr[i]+arr[j]==K){
           console.log("Possible")
           return
         }
        }
      }
      
      return console.log("Impossible")
}

let N=5;
let K= 7;

let arr=[1 ,2 ,3 ,4 ,5]

medicineOfLife(N,K,arr)