function countEvenSumSubarrays(arr, n) {
    //write code here
    
    let res=0;
    let count=0;
    for(let i=n-1;i>=0;i--){
      
      if(arr[i]%2!==0){
       count=n-i-1-count; 
      }else{
        count++;
      }
      res+=count
    }
    
   
    console.log(res)
   }