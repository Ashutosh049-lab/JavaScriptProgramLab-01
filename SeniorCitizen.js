

function seniorCitizen(age){
    let output= age<=0 ?  "Invalid Age" : age>=65 ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount";
    console.log(output)
}


seniorCitizen(65)