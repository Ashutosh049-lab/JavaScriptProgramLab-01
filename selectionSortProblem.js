function solve(N,arr){
    //write code here
    
    for(let i=0;i<N;i++){
      
      let minInd=i;
      
      for(let j=i+1;j<N;j++){
        
        if(arr[j] <arr[minInd]){
          minInd=j;
        }
      }
      let temp=arr[i];
      arr[i]=arr[minInd];
      arr[minInd]=temp
    }
    console.log(arr.join(" "))
}
