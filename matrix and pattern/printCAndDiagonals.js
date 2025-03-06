// print c type

// let n=5;
// for(let i=0;i<n;i++){
//   let bag="";
//   for(let j=0;j<n;j++){
    
//     if(i==0 || i==n-1){
//     bag+="*"+" "
//   }else{
//     bag="*"
//   }
//   }
//   console.log(bag)
// }





//print border and include diagnole

let n=5;
for(let i=0;i<n;i++){
  let bag="";
  for(let j=0;j<n;j++){
    
   if(i==0 ||i==n-1||j==n-1||j==0 || (i+j)==n-1 || i==j){
     bag+="*"+" ";
   }else{
     bag+="  "
   }
  
  
  }
  console.log(bag)
}