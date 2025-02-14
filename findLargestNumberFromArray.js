
function Largest(arr){

    let max=arr[0];

    for(let i=1;i<arr.length;i++){

        if(arr[i] > max){
            max=arr[i];
        }
    }
    console.log(max);
}

let arr=[1,40,20,30,10];
Largest(arr)