


function generateSubString(str){


    for(let i=0;i<str.length;i++){
         
        
        for(let j=i;j<str.length;j++){
              
            let temp="";

            for(let k=i;k<=j;k++){
                temp=temp+str[k];
            }
            console.log(temp);
        }
    }
}

str="Masai";
generateSubString(str);