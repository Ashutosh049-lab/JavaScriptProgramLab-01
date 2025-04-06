function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=+(input[0])
    line=1;
   // console.log(t)
    for(let i=0;i<t;i++){
      let n=+(input[line])
      line++;
      let arr=input[line].trim().split(" ").map(Number)
      line++
      if (n < 2) {
          console.log(0); 
          return;
      }
      let i=0;
      let j=n-1;
      let max=-Infinity;
      
      while(i<j){
        
        let water=(j-i)*Math.min(arr[i],arr[j])
        
        max=Math.max(max,water);
        
        if(arr[i] < arr[j]){
          i++;
        }else{
          j--;
        }
      }
      console.log(max)
    }
    
  }