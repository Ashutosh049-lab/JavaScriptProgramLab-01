function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=+(input[0]);
    let line=1
    // let ind=input[1].trim().split(" ").map(Number)
    // let n=ind[0];
    // let k=ind[1]
    //console.log(k)
    for(let i=0;i<t;i++){
     ind=input[line].trim().split(" ").map(Number)
      let n=ind[0];
      let k=ind[1];
      line++;
      let arr=input[line].trim().split(" ").map(Number)
      line++;
     // console.log(arr)
     let minSum=Infinity;
     
     let sum=0;
     for(let i=0;i<k;i++){
       sum+=arr[i];
     }
     minSum=sum
     for(let i=k;i<n;i++){
       sum+=arr[i]-arr[i-k];
       minSum=Math.min(minSum,sum)
     }
     console.log(minSum)
    }
  }