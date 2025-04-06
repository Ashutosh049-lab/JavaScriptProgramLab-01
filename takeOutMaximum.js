function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=input[0].trim().split(" ").map(Number)
    let n=t[0]
    let k=t[1]
    let line=1;
    let arr=input[line].trim().split(" ").map(Number)
    
    //let max=-Infinity;
    // for(let i=0;i<n-k+1;i++){
    //   let bag=0;
    //   let count=0
    //   for(let j=i;j<k+i;j++){
    //     count++
      
    //     bag+=arr[j];
        
    //     if(count==k){
    //       if(max<=bag){
    //         max=bag
    //       }
        
    //     }
        
      
    //   }
    // }
    let max=0;
    let i=0;
    while(i<k){
      max+=arr[i];
      i++
    }
    //console.log(bag)
    let bag=max
    for(let i=k;i<n;i++){
      bag=bag-arr[i-k]+arr[i];
      max=Math.max(max,bag)
    }
    
    
    console.log(max)
  }