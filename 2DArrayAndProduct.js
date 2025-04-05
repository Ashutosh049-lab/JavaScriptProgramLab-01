
function twoArrayAndProduct(n, m, matrix, p){
    //write code here
   let count=0
   
   
   // row multiplication
    for(let i=0;i<n;i++){
      let mult=1
      for(let j=0;j<m;j++){
        
        mult=mult*matrix[i][j]
        
        
      }
      if(mult==p){
        count++
      }
      //console.log(mult)
     // console.log(count)
      
    }
    
    
    //console.log(count)
    // col
    
     for(let i=0;i<n;i++){
      let mult=1
      for(let j=0;j<m;j++){
        
        mult=mult*matrix[j][i]
        
        
      }
      if(mult==p){
        count++
      }
      //console.log(mult)
     // console.log(count)
      
    }
    
    //console.log(count)
    
    // dia
     
    let  mult=1;
    for(let i=0;i<n;i++){
      
      mult*=matrix[i][i]
    }
   // console.log(mult)
    
    if(mult==p){
      count++;
    }
    console.log(count)
    
  
}
