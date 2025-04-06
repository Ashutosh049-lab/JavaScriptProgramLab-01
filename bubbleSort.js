function solve(N,arr){
    //write code here
    
    for(let i=0;i<N-1;i++){
      
      let flag=0;
      
      for(j=0;j<N-1-i;j++){
        
        if(arr[j+1]<arr[j]){
          
          let temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp
          flag=1;
        } 
      }
      if(flag==0){
        break;
      }
    }
    console.log(arr.join(" "))
}
