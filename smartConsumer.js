
function smartConsumer(n,x,y,arr){
    // Write your code here!
      let totalCost=0;
      let discountCost=0;
      for(let i=0;i<n;i++){
        totalCost+=arr[i]
      }
    
      //console.log(totalCost)
      for(let i=0;i<n;i++){
        if(arr[i]> y){
          arr[i] -=y;
        }else{
          arr[i]=0
        }
        discountCost +=arr[i]
      }
      let sumCouponDiscount=x+discountCost;
      
      if(sumCouponDiscount < totalCost){
        console.log("YES")
      }else{
        console.log("NO")
      }
 }

 let x=30;
 let y=10;
 let n=4;
 let arr=[15, 8 ,22, 6]
 smartConsumer(n,x,y,arr);