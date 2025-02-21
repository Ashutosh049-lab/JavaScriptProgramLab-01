
function printPineTree(N){

    

    for(let i=1;i<=N;i++){
        let bag="";

        for(let j=1;j<=N-i;j++){

            bag=bag+" ";
        }

        for(let j=1;j<=(2*i)-1;j++){
            bag=bag+"*"
        }
        console.log(bag);
    }
}

printPineTree(5)