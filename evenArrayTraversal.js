
function evenArrayTraversal(N, array) {
    //write code here
    let bag=""
    for(let i=0;i<N;i++){
      
      if(i%2==0){
        bag+=array[i]+" "
      }
    }
    console.log(bag)
}

let N=5
let arr=[1, 2, 3, 4, 5]
evenArrayTraversal(N,arr)