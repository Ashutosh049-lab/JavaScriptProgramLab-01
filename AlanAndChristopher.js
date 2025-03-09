
function alanChristopher(S){
    //write code here
    
    let str=S.split("");
    let stack=[];
    
    for(let i=0;i<str.length;i++){
      
      if(str[i]=='#'){
        
        if(stack.length !=0){
          stack.pop()
        }
      }else{
        stack.push(str[i]);
      }
    }
    console.log(stack.join(""))
}

let str="ab#d";
alanChristopher(str);