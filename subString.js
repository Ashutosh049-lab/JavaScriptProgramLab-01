


function generateSubString(str){


    for(let i=0;i<str.length;i++){
         
        
        for(let j=i;j<str.length;j++){
              
            let sub="";

            for(let k=i;k<=j;k++){
                sub=sub+str[k];
            }
            console.log(sub);
        }
    }
}

str="Masai";
generateSubString(str);