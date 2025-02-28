
function sumArray(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    console.log(sum);
}

let arr=[1,2,3,4,-2];
sumArray(arr);