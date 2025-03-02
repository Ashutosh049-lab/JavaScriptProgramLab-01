
function printNonBorder(matrix){

    for(let i=1;i<matrix.length;i++){
       
         let bag=""
        for(let j=1;j<matrix.length;j++){
          bag +=matrix[i][j]+" ";
        }
        console.log(bag)
    }
    
}

let matrix=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]
]

printNonBorder(matrix);