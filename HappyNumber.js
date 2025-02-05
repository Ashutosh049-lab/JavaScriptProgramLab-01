
function HappyNumber(N){

    while(N !=1 && N !=4){
        let sum=0;

        while(N>0){
            let rem=N%10;
            sum=sum+rem**2;
            N=Math.floor(N/10);
        }
        N=sum;
    }

    if(N==1){
        console.log("Happy Number");

    }else{
        console.log("Not Happy Number");
    }
}

HappyNumber(19);