
function stringVowels(N,str){
    //Write code here
    let count=0;
    for(let i=0;i<N;i++){
      let bag=""
      for(let j=i;j<N;j++){
        bag+=str[j]
        
        if(bag[0]=='a'||bag[0]=='e'||bag[0]=='i'||bag[0]=='o'||bag[0]=='u'){
          
           count++;
        }
       
      }
    }
    console.log(count)
    }

    let N=3;
    let str="abc";
    stringVowels(N,str)