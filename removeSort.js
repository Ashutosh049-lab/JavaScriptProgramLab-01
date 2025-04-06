function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+(input[0]);
    let arr=input[1].trim().split(" ").map(Number);
   // console.log(arr)
   let bag=[];
   let prev=-Infinity
   let l=0;
  
   
   while(l<n){
     
     if(arr[l] > prev){
       bag.push(arr[l])
       prev=arr[l]
     }
     l++
     
   }
   console.log(bag.join(" "))
   
  }