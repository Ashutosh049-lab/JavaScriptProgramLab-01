
function minLifeboats(weights, n, k) {
    //write code here
      
      let count=0;
      weights.sort((a,b)=>a-b)
      
      let l=0;
      let r=n-1;
      
      while(l<=r){
        
        if(weights[l]+weights[r]<=k){
          l++;
        }
          count++;
          r--
        
      }
      console.log(count)
    }