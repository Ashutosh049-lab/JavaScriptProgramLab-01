

function solve(x){
  
    while(x%2==0){
      x=x/2
    } 
    
    if(x==1){
      console.log("YES");
    }else{
      console.log("NO")
    }
 }
 solve(2)