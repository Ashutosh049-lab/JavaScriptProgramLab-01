
function substringUnderCondition(str){
    //write code here
    let count=0;
    
    for(let i=0;i<str.length;i++){
       let bag=""
      for(let j=i;j<str.length;j++){
        
        bag+=str[j];
        let st=bag[0];
        
        if(bag[0]==st && bag[bag.length-1]==st){
          count++;
        }
      }
    }
    console.log(count)
}

let str="abcab";
substringUnderCondition(str)