
function ManagingPrioritiesDynamically(arr){
  
   for(let i=0;i<arr.length;i++){

    arr[i]=arr[i+1];
   }
   arr.length=arr.length-1;
  // console.log(arr)

   arr.length=arr.length+2;

   for(let i=arr.length-1;i>=2;i--){
    arr[i]=arr[i-2]
   }
   
   arr[0]="new high-priority Task1";
   arr[1]="new high-priority task2";

   arr[arr.length-1]="new Task";

   console.log(arr);
}

let arr=["Task1","Task2","Task3","Task4","Task5"];
ManagingPrioritiesDynamically(arr);