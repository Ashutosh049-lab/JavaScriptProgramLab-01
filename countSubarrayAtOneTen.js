

function subArray(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
      
      let temp=[]
      for(let j=i;j<arr.length;j++){
        
      
        temp.push(arr[j])
        
      }
      
       if(isCheck(temp)){
          count++
      }
    }
    console.log(count)
    
    function isCheck(temp){
      
      for(let i=0;i<temp.length;i++){
        
        if(temp[i]==10){
          return true;
        }
      }
      return false
    }
    
   
  }
   
  
  let arr=[1,2,10];
  subArray(arr)