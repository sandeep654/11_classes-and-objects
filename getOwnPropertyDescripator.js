
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);

Math.PI = 5 // can't able to overwrite the value
console.log(Math.PI);

// console.log(descripter);


const chai ={
    name:"Ginger chai",
    price:250,
    isAvaiable :true,

    orderChai : function(){
        console.log("Chai nahi hai");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,"price",{
    writable :false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !=="function"){
       console.log(`${key } : ${value }`);
    }
   
}