const User ={
    _email:"sAndY@12",
    _password :'sdfgh',

    get email(){
return this._email.toLowerCase()
    },
    set email(value){
        this._email = value

    }
}

const tea = Object.create(User)

console.log(tea.email);