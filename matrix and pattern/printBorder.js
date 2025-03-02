
function printBorder(matrix){
   
    for(let row=0;row<matrix.length;row++){
         let bag=" "
        for(let col=0;col<matrix[row].length;col++){
            
            if(row==0 ||row==matrix.length-1 || col==0 || col==matrix[row].length-1){
                bag +=matrix[row][col]+" ";
                
            }else{
                bag +="  "
                
            }
        }
        console.log(bag)
    }
    
}

let matrix=[[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]
]

printBorder(matrix);