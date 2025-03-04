
function sub(arr){
  
    let bag=[];
    for(let i=0;i<arr.length;i++){
      let temp=[]
      for(let j=i;j<arr.length;j++){
       temp.push(arr[j]);
       bag.push([...temp])
       
      }
     
      
    }
    console.log(JSON.stringify(bag));
   

    
  }
  
  let arr=[1,2,3,5,6]
  sub(arr);