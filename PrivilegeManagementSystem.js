

function PrivilegeManagement(person){
 
    return person.role=="admin" ? (person.active ? (person.experience >5 ? (person.department=="IT" ? "Full IT Admin Access"
    :"Full General Admin Access"):"Limited Admin Access"):"Admin Access Revoked") 
  
  
  
     : person.role === "manager" ? (
          person.active ? (
              person.experience > 3 ? (
                  person.department === "Sales" ? "Full Sales Manager Access" : "Full Manager Access"
              ) : "Limited Manager Access"
          ) : "Manager Access Revoked")
  
  
   : person.role=="user"? (person . active ?(person.department=="Support" ? "Priority Support Access":
    "User Access"):"User Access Revoked"):"Invalid Role";
    
    
  
  }
  
  let person = [
  { role: "admin", 
                  experience: 7, 
                  active: true, 
                  department: "IT",
                  
  },
   
  { role: "manager",
  experience: 4, 
  active: true, 
  department: "Marketing",
  },
  { role: "user",
  experience: 2, 
  active: true, 
  department: "Support" ,
    
  },
   
  { role: "admin",
  experience: 3, 
  active: false, 
  department: "Finance", 
     
  }
  ];
   
  PrivilegeManagement(person);
  
  console.log(PrivilegeManagement(person[0]))
  console.log(PrivilegeManagement(person[1]))
  console.log(PrivilegeManagement(person[2]))
  console.log(PrivilegeManagement(person[3]))
  