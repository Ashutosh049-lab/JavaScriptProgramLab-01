
function subArray(arr,n){
    let count=0
    let temp=[]
  for(let i=0;i<n;i++){
    
    let bag=0
    for(let j=i;j<n;j++){
      bag+=arr[j]
      
      temp.push(bag)
      
    }
  }
  
  max(temp)
  
  function max(temp){
    
    let max=-Infinity;
   for(let i=0;i<temp.length;i++) {
    if(max<temp[i]){
      max=temp[i]
    }
   }
    
     console.log(max);
  }
}

let arr=[1,2,3,4];
n=4;
subArray(arr,n)
