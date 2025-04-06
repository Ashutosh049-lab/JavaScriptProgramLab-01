function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    ind=input[0].trim().split(" ").map(Number)
    let n=ind[0]
    let k=ind[1]
    let str=input[1].trim()
    //console.log(str)
    
    let set= new Set();
    let l=0;
    let count=0;
    
    for(let r=0;r<n;r++){
      
      while(set.has(str[r]) || set.size>=k){
        set.delete(str[l]);
        l++
      }
      set.add(str[r]);
      
      if(r-l+1==k && set.size==k){
        count++;
        set.delete(str[l]);
        l++;
      }
    }
    console.log(count)
    
  }