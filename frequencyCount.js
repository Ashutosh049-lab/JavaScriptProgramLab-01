
function frequencyCount(arr){

    let obj={};

    for(let i=0;i<arr.length;i++){

        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    console.log(obj);
}

let arr=["A","S","H","U","T","O","S","H"];
frequencyCount(arr)