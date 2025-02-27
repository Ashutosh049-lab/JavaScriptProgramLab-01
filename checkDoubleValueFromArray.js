

function cards(arr){
 
    for(let i=0;i<arr.length;i++){
      
      let multi=arr[i]*2;
      
      for(let j=i+1;j<arr.length;j++){
        if(multi==arr[j]){
          console.log("Yes")
          return;
        }
      }
    }
    console.log("No")
  }
  let arr=[2,3,4]
  cards(arr)
  
  