import addToDom from "./helpers";

export class Person {
    constructor(name){
        this.name = name;
    }

    greet(){
        this.speak(`Hello my name is ${this.name}`);
    }

    speak(message){
        addToDom(`${this.name} Says: ${message}`);
    }
}


export class SuperPerson extends Person {
    constructor(name, superpower){
        super(name); //invoking the constructor of the parent class

        this.superpower = superpower;
    }

    saySuperPower(){
        this.speak(`My superpower is ${this.superpower}`);
    }

    speak(message){
        super.speak(`${message} and I can ${this.superpower}`); 
        //this is accessing the parent class' methods and overriding them in SuperPerson specifically
    }
}

