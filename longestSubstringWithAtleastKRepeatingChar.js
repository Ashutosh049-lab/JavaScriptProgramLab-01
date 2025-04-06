function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+(input[0]);
    let line=1;
    let str=input[line].trim().split("").join("");
    line++;
    let k=+(input[line])
    let obj={};
    
    for(let i=0;i<n;i++){
      
      if(obj[str[i]]){
        obj[str[i]]++;
      }else{
        obj[str[i]]=1
      }
    }
    
    let bag=0;
    for(let key in obj){
      
      if(obj[key]>=k){
        bag+=obj[key]
      }
    }
   // console.log(obj)
    console.log(bag)
  }