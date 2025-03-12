
function longestIncSubArr(n, A) {
    //write code here
    let max=1;
    let s=1;
    
    for(let i=1;i<n;i++){
      
      if(A[i]>A[i-1]){
        s++;
      }else{
        s=1;
      }
      
      max=Math.max(max,s)
    }
    console.log(max)
    
  }

  let n=6
  let A=[1, 2, 1, 2, 3, 1]
  longestIncSubArr(n,A)