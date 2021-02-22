// function Person(fullName, favColor){
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
//     }
// }

class Person {
    constructor(name, favoriteColor){
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
    }
}

export default Person;


/*
in App.js:

import '../styles/styles.css';
import Person from './modules/Person';

if (module.hot) {
    module.hot.accept()
}

class Adult extends Person {
    payTaxes(){
        console.log( this.name + " now owes zero taxes.")
    }
}

let john = new Person ("John Doe", "purple");
john.greet();

let jane = new Adult ("Jane Smith", "green");
jane.greet();
jane.payTaxes();
*/