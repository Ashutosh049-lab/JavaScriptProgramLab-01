
// print the count of all the su str which have consecutive vowels in them

function subString(N,S){
    //write code here
    let count=0;
    
    for(let i=0;i<N;i++){
      let bag="";
    
      for(let j=i;j<N;j++){
        bag+=S[j];
       // console.log(bag)
        
        if(findVowel(bag)){
          //console.log(bag)
          count++;
        }
        
      }
    }
    console.log(count)
    
    
    
// find to vowel    
    function findVowel(str){
      
      for(let i=0;i<str.length;i++){
        if((str[i]=="a" || str[i]=="e" || str[i]=="i" ||str[i]=="o" || str[i]=="u") && (str[i+1]=="a" || str[i+1]=="e" || str[i+1]=="i" || str[i+1]=="o" || str[i+1]=="u")){
        //console.log(str[i])
        //  count++;
        return true;
        }
      }
    }
}



let str="cdea"
let N=4;
subString(N,str);