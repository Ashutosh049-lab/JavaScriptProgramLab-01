function countSubarraysWithSumLessThanM(arr, n, m) {
    //write code here
    
    let beg=0;
    let sum=0;
    let count=0;
    
    for(let i=0;i<n;i++){
      
      sum+=arr[i];
      
      while(sum>=m && beg<=i){
        sum-=arr[beg];
        beg++;
      }
      count+=(i-beg+1)
    }
    console.log(count)
    }