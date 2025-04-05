

function HandlingDynamicAdjustments(arr){

    for(let i=0;i<arr.length;i++){

        if(arr[i]< 40){
            arr[i]=arr[i]+20;
        }else if(arr[i] >90){
            arr[i]=90;
        }
    }

    let count=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=50){
            count++
        }
    }
    console.log(count);
}

let arr=[10,20,30,40,50,60,70,80,90,99];

HandlingDynamicAdjustments(arr);