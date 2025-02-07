
function largest(num1,num2,num3){


    return (num1 > num2) && (num1>num3) ? num1 : (num2> num1) && (num2 > num3) ? num2 :(num3 > num1) && (num3>num2) ? num3 :-1
  
}


  let num1=45;
  let num2=78;
  let num3=33;
  let output=largest(num1,num2,num3)
  console.log(output)