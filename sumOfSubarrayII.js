function findSubarrayWithSumK(arr, n, k) {
    // write code here
      let sum=0;
      let l=0;
      
      for(r=0;r<n;r++){
        sum+=arr[r];
        
        while(sum>k && l<=r ){
          sum-=arr[l];
          l++;
        }
        
        if(sum==k){
          console.log("Yes");
          return;
        }
      }
        console.log("No")
      
    }