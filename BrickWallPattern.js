

function BrickWallPattern(H,W){
    for(let i=1;i<=H;i++){
        let bag=""
        for(let j=1;j<=W;j++){
           if(i%2==1){
            bag=bag+"[]"+"  "
           }

           if(i%2==0){
            bag=bag+"  "+"[]"
           }
        }
        console.log(bag);
    }
}
let H=4;
let W=5;
BrickWallPattern(H,W);