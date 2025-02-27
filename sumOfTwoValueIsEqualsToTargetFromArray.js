

function TargetValue(arr,target){
    let count=0;
    for(let i=0;i<arr.length-1;i++){
      
      for(let j=i+1;j<arr.length;j++){
        
        if(arr[i]+arr[j]==target){
          count++;
        }
      }
    }
    console.log(count);
    
  }
  
  let arr=[3,0,6,2,7];
  let target=9;
  TargetValue(arr,target)
  
  
  