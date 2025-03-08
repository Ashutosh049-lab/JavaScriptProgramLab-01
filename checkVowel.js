function checkVowel(N, str) {
    //write code here
    let flag=0;
    for(let i=0;i<N;i++){
      
      if(str[i]=="a"|| str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
        
        flag=1;
      }
    }
    
    if(flag==1){
      console.log("true")
    }else{
      console.log("false")
    }
    
  }

  
  let N=4;
  let str="acbd"
  checkVowel(N,str)