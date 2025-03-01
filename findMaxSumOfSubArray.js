
function subArray(arr){
    //write code here
   
   let bag=[]
   
   for(let i=0;i<arr.length;i++){
     
     let temp=[];
     for(let j=i;j<arr.length;j++){
       
       temp.push(arr[j]);
       bag.push([...temp])
     }
   }
  
 // console.log(bag)
  
   
      let maxSum=-Infinity
     for(let i=0;i<bag.length;i++){
      
    
      let sum=sumSubArray(bag[i]);
      
      if(maxSum <=sum){
        maxSum=sum;
      }
        
      
     }
  
    console.log(maxSum)
    
    
    function sumSubArray(arr){
      let sum=0;
      for(let i=0;i<arr.length;i++){
        sum +=arr[i]
      }
      
      return sum;
    }
}

let arr=[5,4,-1,7,8];
subArray(arr)