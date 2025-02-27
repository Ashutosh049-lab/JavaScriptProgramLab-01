


function generatePassword(length,includeNumbers=true,includeSpecialChars=false){
  
    if(length < 1){
      return "Invalid length";
    }
    else if((includeNumbers && includeSpecialChars)&& length <3){
      return "Invalid length";
    }else if(includeNumbers && length<2){
      return "Invalid length";
    }else if(includeSpecialChars && length< 2){
      return "Invalid length"
    }
    
    
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase= "abcdefghijklmnopqrstuvwxyz";
    let numbers="0123456789"
    let special= "!@#$%^&*()";
    
    let totalChar=0;
    let password="";
    
    password +=upperCase[Math.floor(Math.random()*26)];
    totalChar++;
    
    if(includeNumbers){
      password +=numbers[Math.floor(Math.random()*10)];
      totalChar++;
    }
    
    if(includeSpecialChars){
      password +=special[Math.floor(Math.random()*special.length)];
      totalChar++;
    }
    
    
    let eligible = upperCase + lowerCase;
    
    if(includeNumbers){
      eligible +=numbers;
      
    }
    
    if(includeSpecialChars){
      eligible +=special;
    }
    
    for(let i=totalChar+1;i<=length;i++){
      let index=Math.floor(Math.random()*eligible.length);
      password +=eligible[index]
    }
  
    return password
    
  }
  
  
  let result=generatePassword(10,true,true);
  console.log(result)
  