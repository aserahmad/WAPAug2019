"use strict";

/**
 * Declaring the person object
 * @type {{favoriteHobby: person.favoriteHobby, species: string, name: string, age: number, hobby: string}}
 */
let person = {
    name: 'Anonymous',
    age: 0,
    hobby: 'A hobby',
    species: 'homo sapien',
    favoriteHobby: function() {
        console.log("My name is " + this.name + " and my hobby is " + this.hobby + ".");
    }
}

/**
 * Declaring the teacher object
 * @type {person} the object, from which teacher inherits
 */
let teacher = Object.create(person);
teacher.subject = 'A subject';

// adding teach() method to teacher
teacher.teach = function() {
    console.log(this.name + " is now teaching " + this.subject + ".");
}

// creating first teacher and setting its properties
let t1 = Object.create(teacher);
t1.name = 'James';
t1.age = 25;
t1.hobby = 'Soccer';
t1.subject = 'FPP';

// calling the teach method of t1
t1.teach();

// creating second teacher and setting its properties
let t2 = Object.create(teacher);
t2.name = 'Noah';
t2.age = 27;
t2.hobby = 'Baseball';
t2.subject = 'MPP';

// calling the teach method of t2
t2.teach();