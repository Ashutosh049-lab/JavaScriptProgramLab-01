
function primeNumber(num){

    if(num < 2){
        return false;
    }

    for(let i=2;i<num;i++){

        if(num % i==0){
            return false;
        }
    }

    return true;
}

let num=15;
console.log(primeNumber(num));