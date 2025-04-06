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
      
      
      let l=0;
      let r=l+1;
      let bag="";
      let count=0;
      while(l<n && r<=n){
        
        if(arr[l]!==arr[r]){
          bag+=arr[l]+" "
          count++;
        }
        l++;
        r++
        
      }
      console.log(count)
      console.log(bag)
      
    }
    
  }