function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=+(input[0]);
    let line=1;
   // console.log(t)
   for(i=0;i<t;i++){
     
     let ind=input[line].trim().split(" ").map(Number);
     let n=ind[0];
     let k=ind[1];
     line++;
     let arr=input[line].trim().split(" ").map(Number);
     line++;
     
     let res=[];
     
     for(let j=0;j<n-k+1;j++){
       
       let flag=0;
       
       for(let l=j;l<j+k;l++){
         
         if(arr[l]<0){
           res.push(arr[l]);
           flag=1;
           break;
         }
       }
       
       if(flag==0){
         res.push(0);
       }
     }
     
     console.log(res.join(" "))
     
   }
  }