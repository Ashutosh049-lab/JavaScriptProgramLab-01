

function LPattern(n){

    for(let i=1;i<n;i++){
        console.log("*");

        
    }
    let bag="";
    for(let j=1;j<=n;j++){
        bag =bag+"*"
    }
    console.log(bag)
}

LPattern(5);