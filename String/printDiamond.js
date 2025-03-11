function rhombusPattern(n){
    //Write code here
      
      for(let i=0;i<=n;i++){
        let temp="";
        
        for(let j=0;j<n-i;j++){
          
          temp+="  "
        }
       // console.log(temp)
        
        for(let k=0;k<=i;k++){
          temp+=k+" "
        }
        // console.log(temp)
        
        for(let l=i-1;l>=0;l--){
          temp+=l+" "
        }
        console.log(temp)
      }
      
      
      for(let i=n-1;i>=0;i--){
        let temp="";
        
        // console.log(temp)
        for(let j=0;j<n-i;j++){
          temp+="  "
        }
        // console.log(temp)
        for(let k=0;k<=i;k++){
          temp+=k+" "
        }
        
        for(let l=i-1;l>=0;l--){
          temp+=l+" ";
          // console.log(temp)
        }
        console.log(temp)
      }
      
      
    }

    rhombusPattern(5)