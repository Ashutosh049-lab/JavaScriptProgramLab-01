
function pattern(N){
    let x=N*N;
    let bag="";
    for(let i=1;i<=x;i++){
       bag=bag+i+" ";
       if(i%3==0){
        console.log(bag);
        bag=0;
       }
    }
}
pattern(3);