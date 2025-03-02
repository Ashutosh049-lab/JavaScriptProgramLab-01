

function printMatrix(matrix){

   //  console.log(JSON.stringify(matrix)); or

   for(let row of matrix){
    console.log(row);
   }
}

let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]
]

printMatrix(matrix);