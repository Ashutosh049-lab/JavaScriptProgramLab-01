
function roleMessage(user){
  
    return user.role=="admin" ?( user.active ? "Admin Access Granted!" :"Admin Access Revoked"  ): user.role=="user" ? (user.active ?
     "User Access Granted!" : "User Access Revoked") : "Access Denied"
    
  }
  let obj=[
            {
            name: "Alice",
            role: "admin",
           active: false,
            },
            
            {
            name: "Bob",
            role: "user",
            active: true ,
            }
            
          
    ];
    
    let output=roleMessage(obj)
    
    console.log(roleMessage(obj[0]))
     console.log(roleMessage(obj[1]))