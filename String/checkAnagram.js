
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



     // remove time complexity
     
//     if(s.length !==t.length){
//         return false;
//     }

//    let count=Array(128).fill(0);
//     let i=0;
//    while(i<s.length){
//      let charA=s.charCodeAt(i)-65;
//      count[charA]++;
//      let charB=t.charCodeAt(i)-65;
//      count[charB]--;

//      i++
     
//    }

//    for(let i=0;i<128;i++){

//     if(count[i] !=0){
//         return false;
//     }
//    } 

//    return true
     

}

let S1="anagram"
 let S2="nag a ram"
 checkAnagram(S1,S2);
