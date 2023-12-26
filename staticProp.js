class User{
    constructor(username,password){
        this.username = username 
        this.password = password
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return 123
    }
}

const sandeep = new User("Sandy","@123")
console.log(sandeep);
// console.log(sandeep.createId()); 


class Teacher extends User{
    constructor(username,password,email,phoneno){
        super(username,password)
        this.email = email
        this.phoneno =phoneno
    }
}

const hitesh = new Teacher("hitesh","!@#$%","san@123","9876543210")
console.log(hitesh);
hitesh.logMe()

// hitesh.createId()