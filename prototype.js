let myName = "Sandeep yadav   "

// // console.log(myName.trim().length);

// console.log(myName.trueLength);

let myHeros = ["sandeep","APJabdulKalam","hitesh","mySirg"]

let heroPower ={
    Sandeep: "Motivation",
    APJabdulKalam:"missile man",
    hitesh: "programmer",
    mySirg : "mentor",

    getSandeepPower: function(){
        console.log(`Sandeep power is ${this.Sandeep}`);

    }
}
Object.prototype.hits = function(){
    console.log(`hitesh is present in all objects`);
}
heroPower.hits()

console.log(heroPower.getSandeepPower());

myHeros.hits()

Array.prototype.hloSandeep = function (){
    console.log(`sandeep says hlo`);
}

myHeros.hloSandeep()
// heroPower.hloSandeep()


// inheritance

const user ={
    name: "Sandeep",
    email :"sandeep@google.com"
}

const Teacher ={
    makeVideo : true
}

const teachingSupport ={
    isAvaiable: false
}

const TASupport ={
    makeAssignment: 'js assignment',
    fullTime : true ,
    __proto__: teachingSupport   // inherit
}
// old syntax
Teacher.__proto__ = user

//modern syntax 

Object.setPrototypeOf(teachingSupport,Teacher)


String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);

}
myName.trueLength()
