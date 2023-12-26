function setUsername(username){
    // complex Db calls
    this.username = username
    console.log("called");

}

function createUser(username , email , password){
     setUsername.call(this,username) // for holding the reference of upper funct variable
     this.email = email
     this.password = password

}

const chai = new createUser("Sandeep" , "Sandeep@fb.in","1234!@")
console.log(chai);