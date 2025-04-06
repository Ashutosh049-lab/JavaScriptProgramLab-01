function seperationOfOddEven(N, arr,Q) {
    //write code here
    
    if(Q==1){
      let evenBag="";
      let oddBag="";
      for(let i=0;i<N;i++){
        
        if(arr[i]%2==0){
          evenBag+=arr[i]+" "
        }
      }
      for(let i=0;i<N;i++){
        
        if(arr[i]%2!==0){
          oddBag+=arr[i]+" "
        }
      }
      console.log(evenBag+oddBag)
    }else if(Q==2){
      let evenBag="";
      let oddBag="";
      
      for(let i=0;i<N;i++){
        
        if(arr[i]%2!==0){
          oddBag+=arr[i]+" ";
        }
      }
       for(let i=0;i<N;i++){
        
        if(arr[i]%2==0){
          evenBag+=arr[i]+" ";
        }
      }
      console.log(oddBag+evenBag)
    }
  }
  