

function countChars(str){
    let bag=""
    let count=1;
    for(let i=0;i<str.length;i++){
      
      if(str[i]==str[i+1]){
        count++
      }else{
       bag=bag+str[i]+count+"" ;
       count=1
      }
    }
    console.log(bag)
}
  
  let str="aabbaaccc";
  countChars(str);
  