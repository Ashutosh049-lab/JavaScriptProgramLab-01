function longestUniqueSubarray(gifts, n) {
    // write code here
    // let max=-Infinity;
    // for(let i=0;i<n;i++){
    //   let bag=""
    //   for(let j=i;j<n;j++){
    //     bag+=gifts[j]
    //     // console.log(bag)
        
    //     if(max<checkUnique(bag)){
    //       max=checkUnique(bag)
    //     }
    //   }
    // }
     
    // console.log(max)
     
     
     
      
    
    // function checkUnique(arr){
    //   let n=arr.length
    //   let obj={};
    //   let bag=""
      
    //   for(let i=0;i<n;i++){
         
    //   if(!obj[gifts[i]]){
    //     obj[gifts[i]]=gifts[i]
    //   }   
       
        
    //   }
      
    //   for(let key in obj){
    //   bag+=obj[key]
    //   }
    //   //console.log(bag.length);
    //   return bag.length
      
    // }
    
    
    
    
    let max=0;
    let obj={};
    let start=0;
    
      for(let i=0;i<n;i++){
        
        while(obj[gifts[i]]){
        delete obj[gifts[start]] 
        start++;
        }
        
         obj[gifts[i]]=true;
         max=Math.max(max,i-start+1)
      }
      
      console.log(max)
    
    }