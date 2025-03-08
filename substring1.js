
function generateALlSubstr(N,A){
    //write code here
   
   for(let i=0;i<N;i++){
     let bag=""
     for(let j=i;j<N;j++){
       
       bag+=A[j];
       console.log(bag)
     }
   }
  }

  let N=4;
  let str="aman"
  generateALlSubstr(N,str)