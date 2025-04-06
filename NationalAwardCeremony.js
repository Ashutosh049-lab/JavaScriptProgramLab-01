function sortMedals(n,winners) {
    // write code here
    
    let obj={};
    
    for(let i=0;i<n;i++){
      
      if(obj[winners[i]]){
        obj[winners[i]]++;
      }else{
        obj[winners[i]]=1
      }
    }
   // console.log(obj)
    let bag="";
    
    if(obj[0]){
      
      for(let i=0;i<obj['0'];i++){
        bag+='0'+" "
      }
    }
    
    if(obj[1]){
      
      for(let i=0;i<obj['1'];i++){
        bag+='1'+" "
      }
    }
    if(obj[2]){
      
      for(let i=0;i<obj['2'];i++){
        bag+='2'+" "
      }
    }
    console.log(bag)
    
   }