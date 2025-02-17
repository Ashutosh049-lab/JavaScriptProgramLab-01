
function DiscountPriceCalculator(price){

    if(price <0){
        console.log("Invalid price, the price must be a non-negative number.");
    }else if(price <=20){
        console.log(price)
    }else if(price >20){
       let discount=0.10*price;
       let finalPrice=price-discount;
       console.log(finalPrice);
    }
    
}

DiscountPriceCalculator(15);
DiscountPriceCalculator(20);
DiscountPriceCalculator(25);
DiscountPriceCalculator(-10);