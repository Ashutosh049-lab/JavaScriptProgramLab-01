
function trackSpeed(order,S) {
    //write code he
    
    let obj={};
    
    for(let i=0;i<order.length;i++){
      obj[order[i]]=i;
    }
    //console.log(obj["a"])
    
    let sum=0;
    let c=0
    
    for(let j=0;j<S.length;j++){
      
      let x=obj[S[j]];
      let time=Math.abs(x-c);
      c=x;
      
      sum+=time
    }
    
    
    console.log(sum)
    
  }

  let order="pqrstuvwxyzabcdefghijklmno"
  let S="hello"

  trackSpeed(order,S);