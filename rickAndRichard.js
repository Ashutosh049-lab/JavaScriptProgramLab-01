function ricknRichards(n,A){
    //write code here
    
    let left=0;
    let right=n-1;
    let sum1=0;
    let sum2=0;
    let count1=0;
    let count2=0;
    
    
    while(left<=right){
      
      if(sum1 <=sum2){
        sum1+=A[left];
        count1++;
        left++;
      }else{
        sum2+=2*A[right];
        count2++;
        right--;
      }
    }
    console.log(count1,count2)
}

let n=5;
let arr=[2,9,8,2,7]
ricknRichards(n,arr)