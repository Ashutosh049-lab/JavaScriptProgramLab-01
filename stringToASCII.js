

function string (str){
   let value=0;
    for(let i=0;i<str.length;i++){

        value=value+str[i].charCodeAt();
    }
    console.log(value)
}
string("abc")