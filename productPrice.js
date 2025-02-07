
function productPrice(price){
  
    return price >=1000 ? "Expensive" : price >=500 && price <=999 ? "Moderate" :price <500 && price >0 ? "Affordable" :
    price==0 ? "Free" : "Invalid price"
  }
  
   let price = 750;
   
   let output=productPrice(price);
   console.log(output)