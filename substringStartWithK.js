
function substringsStartingWithK(N,A,K){
    //code here
    let count=0;
    for(let i=0;i<N;i++){
      let bag=""
      for(let j=i;j<N;j++){
        bag+=A[j];
        
        if(bag[0]==K)
        count++;
      }
    }
    
    console.log(count)
   
}

let N=4;
let str="aman";
let K="a"
substringsStartingWithK(N,str,K)