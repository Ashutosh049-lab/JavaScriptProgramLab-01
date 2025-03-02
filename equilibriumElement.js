

    
function equilibriumElement(arr){

    for(let i=1;i<arr.length-1;i++){

        let leftSum=0;

        for(j=i-1;j>=0;j--){
            leftSum +=arr[j]
        }

        
        let rightSum=0;

        for(j=i+1;j<arr.length;j++){
            rightSum +=arr[j]
        }

        if(leftSum==rightSum){
            return i;
        }
    }
    return -1
}

let arr=[6,3,7,2,4,9,9];

let res=equilibriumElement(arr);
console.log(res)
