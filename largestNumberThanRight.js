


 function largestNumberThanRight(arr){  
let bag=[]
for(let i=0;i<arr.length-1;i++){
  let flag=0;
   for(let j=i+1;j<arr.length;j++){
     
     if(arr[i]<arr[j]){
     flag=1;
     break;
     }
   }
 
   if(flag==0){
     bag.push(arr[i]);
   }
}
bag.push(arr[arr.length-1])
console.log(bag)
 }

 let arr=[16,17,4,3,5,2]
 largestNumberThanRight(arr)