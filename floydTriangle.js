

function printTriangle(n){
let res=1
for(let i=1;i<=n;i++){
let bag=""
for(let j=1;j<i;j++){
   
   bag=bag+res+" "
   res++
 
}
console.log(bag)
}
}
printTriangle(5)

