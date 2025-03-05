

function runProgram(input) {
    // Take input,then write logic
   let str="abcdefghijklmnopqrstuvwxyz";
   str=str.split("");
   
  let arr=[];
  
  
  
  
  
  for(let i=0;i<input.length;i++){
     
    let x=input[i].charCodeAt()-97;;
    x=(x*x)%26
    // console.log(x)   
    arr[i]=str[x];
  }
  console.log(arr.join(""))
  
}

let str="bcd";
runProgram(str)   // output:-bej