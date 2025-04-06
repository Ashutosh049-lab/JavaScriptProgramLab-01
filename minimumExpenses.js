function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=(input[0])
    //console.log(input)
   
    let line=1;
    for(let i=0;i<t;i++){
    let ind=input[line].trim().split(" ").map(Number)
    let n=ind[0];
    let k=ind[1]
     line++
     let arr=input[line].trim().split(" ").map(Number)
     line++
      
      let sum=0
      for(let j=0;j<k;j++){
        sum+=arr[j]
      }
      //console.log(sum)
      let minSum=sum;
      
      for(let l=k;l<n;l++){
        sum+=arr[l]-arr[l-k]
        minSum=Math.min(minSum,sum)
      }
      console.log(minSum)
    }
  }