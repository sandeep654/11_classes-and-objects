//  prototype se hume classes , new keywords, this keywords milta h

function multipleby5(num){
    this.num = num;
    return num*5
}

multipleby5.power = 201

console.log(multipleby5(6));
console.log(multipleby5.power);
console.log(multipleby5.prototype)

function createUser(username ,score) {
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const sandeep =new createUser("Sandeep",23)
const mohit = new createUser("Mohit",22)

sandeep.printMe()