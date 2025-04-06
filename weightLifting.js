function weightLiftingCompetition(N, weights) {
    //write code here
     
     let l=0;
     let r=N-1;
     
     let hSum=0;
     let jSum=0;
     
     let x=0;
     let y=0;
     while(l<=r){
       
       if( x <= y){
       x+=weights[l];
      // console.log("x:"+x)
       l++
       }else{
         hSum+=x;
        // console.log("h:"+hSum)
         x=0
       }
       
       
       
       if(y < x){
       y+=weights[r]
       //console.log("j:"+jSum)
       r--
       }else{
         jSum+=y;
        // console.log("j:"+jSum)
         y=0;
       }
     }
     hSum += x; 
       jSum += y;
     console.log(hSum);
     console.log(jSum)
     
     
     
     
   }