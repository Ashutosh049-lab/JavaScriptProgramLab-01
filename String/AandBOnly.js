
function aAndB(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
           
            if ((i > 0 && arr[i - 1] === 'a') || (i < arr.length - 1 && arr[i + 1] === 'a')) {
                arr[i] = 'b';
            } else {
                arr[i] = 'a';
            }
        }
    }

    console.log(arr.join('')); 
}


aAndB("?ba??b"); 
aAndB("??b?");   
aAndB("???");    
