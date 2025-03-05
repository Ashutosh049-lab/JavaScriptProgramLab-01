
function subOfSubarray(N, K, arr) {
    //write your code here
    let bag=[];
    let flag=0;
    for(let i=0;i<N;i++){
      //let temp=[];
      let sum=0;
      
      for(let j=i;j<N;j++){
        
        sum +=arr[j]
       // temp.push(arr[j]);
        //bag.push([...temp])
        
        if(sum==K){
          flag=1;
        }
      }
    }
    
    // flag=0;
    // for(let i=0;i<bag.length;i++){
      
    //   if(sum(bag[i])==K)
      
    //   flag=1;
    // }
    
    if(flag==1){
      console.log("Yes");
    }else{
      console.log("No");
    }
    
    
// function sum(arr){
//     let sum=0;
//   for(let i=0;i<arr.length;i++){
   
//   sum +=arr[i] 
    
//   }
//   return sum;
// }



}


let N=5;
let K=3;
let arr=[1,2,1,3,4];
subOfSubarray(N,K,arr)