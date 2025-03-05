
function checkAnagram(S1,S2){
    S1=S1.split(" ").join("").split("").sort();
    // console.log(S1)
     S2=S2.split(" ").join("").split("").sort();
     //console.log(S2)
     if(S1.length !== S2.length){
       console.log("False");
       return
     }
     
     let i=0;
     
    // console.log(S1[i])
     while(i<S1.length){
       
       if(S1[i] !==S2[i]){
         console.log("False");
         return;
       }
       
       i++;
       
     }
     
     return console.log("True")
     

}

let S1="anagram"
 let S2="nag a ram"
 checkAnagram(S1,S2);
