
function middleElement(arr){
    let ans=-1
    for(let i=1;i<arr.length-1;i++){

        let left=0;

        for(let j=i-1;j>=0;j--){

            if(arr[j]>arr[i]){
                left=1;
                break;
            }
        }



        let right=0;

        for(let j=i+1;j<arr.length;j++){

            if(arr[j]<arr[i]){
                right=1;
                break;
            }
        }

        if(left==0 && right==0){
            ans=arr[i];
            break;
        }
    }

    if(ans==-1){
        console.log("-1")
    }else{
        console.log(ans)
    }
}

let arr=[7,1,9,13,14,16,21,18]
middleElement(arr)