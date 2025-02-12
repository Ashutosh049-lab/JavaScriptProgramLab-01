

function TraversingObjects(book){


   let bag=""
   
   for(let key in book){
     bag=bag+key+":"+book[key]+""
   }

   console.log(bag)

}
let book = { title: "The Hobbit", 
    author: "J.R.R. Tolkien",
    year: 1937
   };

TraversingObjects(book);