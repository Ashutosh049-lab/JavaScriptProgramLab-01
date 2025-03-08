function Solve(n,A){
    //write code here
    let bag=""
    for(let i=0;i<n;i++){
      
      flag=0;
      for(let j=i+1;j<n;j++){
        
        if(A[i] < A[j]){
          flag=1;
          break;
        }
      }
      
      if(flag==0){
        bag+=A[i]+" "
      }
    }
    console.log(bag)
    
}

let n=6
let arr=[16, 17, 4, 3, 5, 2]
Solve(n,arr);
