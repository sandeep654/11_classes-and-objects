// using that js which is coming after ES6 

class User {
    constructor(name, age,password) {
        this.name = name
        this.age = age
        this.password= password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeName(){
        return `${this.name.toUpperCase()}`
    }

    smallLetter(){
        return `${this.name.toLowerCase()}`
    }
}

const call1 = new User("Sandeep",'Sandy@gmail.com',"!@#")

console.log(call1.encryptPassword());

console.log(call1.changeName());

console.log(call1.smallLetter())


// behind the scene 

function userName(name, age,password){
    this.name= name;
    this.age =age;
    this.password = password;
}

userName.prototype.encryptPassword = function(){
    return `The Password of ${this.name} is ${this.password}abc`;
}

userName.prototype.changeName = function(){
    return `${this.name.toLowerCase()}`
}

const call2 = new User("Hitesh",'Sandy@gmail.com',"!@#")

console.log(call2.encryptPassword());

console.log(call2.changeName());