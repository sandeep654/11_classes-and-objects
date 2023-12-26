// object literals 

const user = {
    username : "Sandeep Yadav",
    loginCount : 5, 
    signedIn : true,
    password: "!@#123",

    getUserDetails : function () {
        // console.log(`username: ${this.signedIn}`);
        console.log(this);
    }
}

console.log(user.username,user.password);
console.log(user.getUserDetails());
console.log(this);



// constructor function 

// const promiseOne = new Promise()  //new is constructor function
// const date = new Date()

function Users(username, password, isloggedIn) {
    this.username =username;
    this.password = password;
    this.isloggedIn = isloggedIn; 
    return this  
}

const userOne =new Users("sandeep","12345",true)
const userTwo =new Users("Mohit","12341",false)

console.log(userOne);

