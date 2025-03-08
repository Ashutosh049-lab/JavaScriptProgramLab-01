function evenSumSubArr(N,arr){
    //write code here
    let count=0
    
    for(let i=0;i<N;i++){
      let sum=0
      for(let j=i;j<N;j++){
        
        
        sum+=arr[j];
        
        if(sum%2==0){
          count++;
        }
      }
    }
    console.log(count)
    
}

let N=3
let arr=[1, 2, 3];
evenSumSubArr(N,arr)