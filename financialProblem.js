function financialProblem(N,arr){
    // Write your code here!
    
      let bag="";
      bag=bag+1+" ";
      
      for(let i=1;i<N;i++){
        
         let count=0;
         for(let j=i-1;j>=0;j--){
           
           if(arr[j] > arr[i])
             break;
           else
             count++;
           
         }
         bag+=count+1+" ";
      }
      console.log(bag)
    }

   let N= 6
    let arr=[100 ,60 ,70 ,65 ,80 ,85]
    financialProblem(N,arr);