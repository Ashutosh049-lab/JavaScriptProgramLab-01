function specificDiagonals(R, C, matrix, K){
    //write code here
  
  let row=-1;
  let col=-1;
  
  for(let i=0;i<R;i++){
    
    for(let j=0;j<C;j++){
      
      if(matrix[i][j]==K){
        row=i;
        col=j;
        break;
      }
    }
    if(row!==-1){
      break;
    }
  }
  
  
  let dia1=[];
  let i=row;
  let j=col;
  
  
  while(i>=0 && j>=0){
    i--;
    j--;
  };
  i++;
  j++;
  
  
  while(i<R && j<C){
    dia1.push(matrix[i][j])
    i++;
    j++;
  }
  
  
  let dia2=[];
  i=row;
  j=col;
  
  while(i>=0 && j<C){
    i--;
    j++;
  }
  i++
  j--
  
  while(i<R && j>=0){
    dia2.push(matrix[i][j]);
    i++;
    j--;
  }
  
  console.log(dia1.join(" "));
  console.log(dia2.join(" "));
}

// 3 3 R C
// 1 2 3 M
// 4 5 6
// 7 8 9
// 6 K