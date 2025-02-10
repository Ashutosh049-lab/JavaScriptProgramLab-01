
function mapCharSum(N,K,str){
    
    let str1="abcdefghijklmnopqrstuvwxyz";
    let obj={};
    for(let i=0;i<str1.length;i++){
        let ch=str1[i];
        obj[ch]=N+i;
    }

    let sum=0;
    for(let i=0;i<K;i++){

        let ch=str[i];
        sum=sum+obj[ch];
    }
    console.log(sum);
}
let N=30;
let str="abcdefghijklmnopqrstuvwxyz";
let K=3;
mapCharSum(N,K,str);