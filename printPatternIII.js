
function pattern(N){
    
    for(let i=1;i<=N;i++){
        let bag=""
        for(let j=1;j<=N;j++){
            bag=bag+"*"+" ";
        }

        if(i==1 || i==N){
            console.log(bag);
        }else{
            console.log("*")
        }
    }
}

pattern(5);