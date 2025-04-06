function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=+(input[0]);
    let line=1;
    for(let i=0;i<t;i++){
    let idx=input[line].trim().split(" ").map(Number)
   
    let n=idx[0];
    let k=idx[1]
    //console.log(k)
     line++;
     let arr=input[line].trim().split(" ").map(Number)
     line++
     arr.sort((a,b)=>a-b)
     //console.log(arr)
     
     
     let count=0;
     let l=0;
     let r=0;
     while(r<n){
       
       while(arr[r]-arr[l]>k){
         l++;
       }
       count=Math.max(count,r-l+1);
       r++
     }
     
     console.log(count)
     
    }
  }