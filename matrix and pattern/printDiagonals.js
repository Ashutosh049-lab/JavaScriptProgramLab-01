
function printDiagnole(matrix){

    //console.log(n)
     
      for(let i=0;i<matrix.length;i++){
          let bag=""
          for(let j=0;j<matrix[i].length;j++){
              
              if(i==j){
                  bag += matrix[i][j] + " ";
                  
              }
             
          }
          console.log(bag)
         
      }
      
  }
  
  let matrix=[[1, 2, 3],
              [5, 6, 7],
              [9, 10, 11]
  ]
  
  printDiagnole(matrix);
  
  