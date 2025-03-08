function subArrQueII(N, A) {
    //write code here
    let count =0;
    
    for(let i=0;i<N;i++){
      let bag=[]
      for(let j=i;j<N;j++){
        
        if(A[j]<=100){
        bag.push(A[j]);
        }
        
        if(bag[0]%2 ==0 && bag[bag.length-1]%2==0){
          count++
        }
      }
    }
    console.log(count)
  }

  let N=5
  let arr=[1, 2, 3, 4, 5]
  subArrQueII(N,arr)