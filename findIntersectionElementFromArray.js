

function intersection(arr1,arr2){
  
    for(let i=0;i<arr1.length;i++){
      
      for(let j=0;j<arr2.length;j++){
        
        if(arr1[i]==arr2[j]){
           
           return arr1[i]
        }
      }
    }
    return -1;
  }
  let arr1=[4,5,6];
  let arr2=[5,7,8];
  let res=intersection(arr1,arr2)
  console.log(res)