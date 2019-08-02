"use strict";

/**
 * Declaring Person using ES6 syntax
 */
class Person {
    constructor(name, age, hobby) {
        this._name = name;
        this._age = age;
        this._hobby = hobby;
        this.species = 'homo sapien';
    }

    favoriteHobby() {
        console.log("My name is " + this._name + " and my hobby is " + this._hobby);
    }
}

/**
 * Declaring Teacher using ES6 syntax, and inheriting from Person
 */
class Teacher extends Person {
    constructor(name, age, hobby, subject) {
        super(name, age, hobby);
        this._subject = subject;
    }

    teach() {
        console.log(this._name + " is now teaching " + this._subject + ".");
    }
}

// Creating first teacher object
let t1 = new Teacher('Adam', 31, 'Canoeing', 'Algorithms');

// Calling teach on t1
t1.teach();

// Creating second teacher object
let t2 = new Teacher('Samuel', 38, 'Rugby', 'Career Strategy');

// Calling teach on t2
t2.teach();