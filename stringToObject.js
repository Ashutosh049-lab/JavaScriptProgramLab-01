

function stringToObject(str){

   let obj={}

   for(let i=0;i<str.length;i++){
      let key=i+1;
      let value=str[i];
      obj[key]=value;
   }
   console.log(obj);
}

let str="acbde";
stringToObject(str);