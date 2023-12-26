class User {
    constructor(email,password){
        this.email = email ;
        this.password = password ;

    }

    get email(){
        return this._email.toLowerCase()
    }
    //get ke andhar value return krte h or set ke andhar value ko initialize krte h
    //getter ke saath saath setter rhta h 

    set email(value){
        this._email =value
    }
}

const Sandeep = new User("sandy@gmail.com","sandy@123")

console.log(Sandeep.password);
console.log(Sandeep.email);