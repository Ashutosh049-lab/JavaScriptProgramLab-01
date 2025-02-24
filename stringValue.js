

function stringValue(str){

   let obj=[];

   for(let i=0;i<str.length;i++){

    let value=str[i];
    let key=i;

    obj[key]=value;
   }
    
   let count=1;
   for(let key in obj){
    if(str[obj[key]]){
        obj[key]=count;   
    }
   else{
    count++;
   }
   }
   console.log(obj)
}
stringValue("aba")