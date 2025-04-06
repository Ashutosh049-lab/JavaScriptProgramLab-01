function runProgram(input) {
    // Write code here
    input=input.split("\n");
    
    let t=+(input[0])
     line=1
    
    for(let i=0;i<t;i++){
      
      let n=+input[line]
      
      line++
      
      var arr=input[line].trim().split(" ").map(Number)
      //console.log(arr)
      line++;
      
      let flag=0;
      for(let l=0;l<n;l++){
        
        for(let r=l+1;r<n;r++){
          
          let sum=arr[l]+arr[r]
          
          if(arr.includes(sum)){
            flag=1;
            break;
          }
        }
        if(flag==1) break;
      }
      
      if(flag==0){
        console.log("0");
      }else{
        console.log("1")
      }
      
    }
  }