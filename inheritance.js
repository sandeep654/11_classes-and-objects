class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
    
    }
}

class Teacher extends User{

    constructor(username,email,password){
         
        super(username)
        this.email =email
        this.password = password

    }
   
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Sandeep", "this@123.com","!@#123")

console.log(chai);
chai.addCourse()


console.log(chai instanceof Teacher);