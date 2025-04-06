function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let ind=input[0].trim().split(" ").map(Number)
    let n=ind[0];
    let k=ind[1]
    
    let arr=input[1].trim().split(" ").map(Number)
   // console.log(arr)
   let bag=[];
   
   for(let i=0;i<n;i++){
     bag.push({arr:arr[i],mod:arr[i]%k})
   }
   //console.log(bag)
   
   for(let i=0;i<n-1;i++){
     
     for(let j=0;j<n-1-i;j++){
       
       if(bag[j+1].mod <bag[j].mod){
         
         let temp=bag[j];
         bag[j]=bag[j+1];
         bag[j+1]=temp;
         
       }
     }
   }
   //console.log(bag)
   let res="";
   for(let i=0;i<n;i++){
     res+=bag[i].arr+" "
   }
   console.log(res)
  }