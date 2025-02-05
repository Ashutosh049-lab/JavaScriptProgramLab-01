
function reverseNumber(N){

   let reverse=0
    while(N!=0){
        let rem=N%10;
        reverse=reverse*10+rem;
        N=Math.floor(N/10);
    }
    console.log(reverse);
}

reverseNumber(179);