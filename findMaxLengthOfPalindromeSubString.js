
function PalSubString(S){
    //write code here
   
   let bag=[]
   
   for(let i=0;i<S.length;i++){
     
     let temp="";
     for(let j=i;j<S.length;j++){
       
       temp=temp+S[j];
       bag.push(temp)
     }
   }
   //console.log(bag)
   
    // check max length of palindrom substring  
      let maxLen=-Infinity;
     for(let i=0;i<bag.length;i++){
      if(isPalindromeString(bag[i])){
       
       if(maxLen <=bag[i].length){
         maxLen=bag[i].length;
       }
      }
     }
     
     console.log(maxLen)
  
   
   
   
   
  // palindromic function 
   function isPalindromeString(str){
     let temp=str;
     let rev=""
     for(let i=str.length-1;i>=0;i--){
       rev=rev+str[i]+""
     }
     
     //console.log(rev)
   
   
   if(temp==rev){
     return true;
   }else{
     return false;
   }
 }
}
PalSubString("thisracecarisgood")

