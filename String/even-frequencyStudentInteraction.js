function runProgram(arr) {
    // Take input,then write logic

    // let line=input.split("\n");
    // let n=parseInt(line[0]);
    // let arr=line[1].split(" ").map(Number)

    let count=0;
    let obj={};
    
    for(let i=0;i<arr.length;i++){
      
      if(obj[arr[i]]){
        obj[arr[i]]++;
      }else{
        obj[arr[i]]=1;
      }
    }
    
    //console.log(obj);
    
    for(let key in obj){
      
      if(obj[key]%2==0){
        count++;
      }
    }
    
    console.log(count);
    
}



let arr=[101, 102, 101, 103, 102 ,101 ,105 ,106, 105] // output:-2 because 102 and 105 are two times(even) there that why.
runProgram(arr)