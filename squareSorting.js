function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let t=+(input[0]);
    let line=1
    for(let i=0;i<t;i++){
      
      let n=+(input[line]);
      line++;
      let arr=input[line].trim().split(" ").map(Number);
      line++;
     
      let bag=[];
      for(let i=0;i<n;i++){
        bag.push({sq:arr[i]**2,arr:arr[i]})
      }
      //console.log(bag.map(obj=>obj.arr))
      
      for(let i=0;i<n-1;i++){
        
        for(let j=0;j<n-1-i;j++){
          
          if(bag[j+1].sq < bag[j].sq){
            
            let temp=bag[j];
            bag[j]=bag[j+1];
            bag[j+1]=temp
          }
        }
      }
     // console.log(bag)
     let res="";
     
     for(let i=0;i<n;i++){
       res+=bag[i].arr+" "
     }
     console.log(res)
    }
  }