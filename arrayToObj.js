

function arrayToObj(arr){

    let obj={};

    for(let i=0;i<arr.length;i++){

        let key=i+1;
        let value=arr[i];

        obj[key]=value;

    }
    console.log(obj);
}

arr=[1,5,8,9,10];
arrayToObj(arr);