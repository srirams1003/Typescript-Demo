"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Employee_js_1 = require("./Modules/Employee.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.static("public"));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    // res.send('Express + Typescript!');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
let reynolds = {
    name: 'reynolds',
    ink: 'blue',
    cost: 10,
    format() {
        return `A ${reynolds.name} costs ${reynolds.cost}.`;
    }
};
console.log(reynolds.format());
let new_pen = {
    name: 'Mont Blanc',
    ink: 'blue',
    cost: 50,
    format() {
        return `A ${new_pen.name} costs ${new_pen.cost}.`;
    },
    remarks: 'good',
    cheap: false
};
console.log(`The color of the pen's ink is ${new_pen.ink}.`);
console.log(new_pen.format());
console.log(new_pen);
new_pen.cost = 65;
console.log(new_pen);
let jane = {
    name: 'jane',
    age: 25,
    is_present: true
};
let david = {
    name: 'david',
    age: 34,
    is_present: true,
    number_managing: 10
};
console.log(jane);
console.log(david);
// classes
class Person {
    constructor(n, a, g, m) {
        this.test = "2";
        this.name = n;
        this.age = a;
        this.gpa = g;
        this.marital_status = m;
    }
    print_details() {
        let m_status;
        if (this.marital_status) {
            m_status = 'married';
        }
        else {
            m_status = 'single';
        }
        console.log(`${this.name} is ${this.age} years old. Their gpa is/was ${this.gpa} and they are ${m_status}.`);
    }
}
let person1 = new Person("John", 28, 3.2, false);
console.log("person1.test", person1.test);
person1.print_details();
let person2 = new Person("Mary", 33, 3.8, true);
person2.print_details();
console.log(person1, person2);
// person1.age = 30; // this line throws an error as age is a readonly property
console.log(person1.age); // this line DOES NOT throw an error as age is a readonly property, so it can be read from outside of the class declaration
// person1.marital_status = true;  // this line throws an error as marital_status is a private property
// console.log(person1.marital_status);    // this line ALSO throws an error marital_status is a private property, so it can neither be read nor written to from outside the class declaration
// comment out any lines that throw errors before moving ahead
let people = [];
people.push(person1);
people.push(person2);
// people.push(3);    // this line throws an error as 3 is not of type 'Person'.
console.log(people);
people.forEach(person => {
    console.log(person.name, person.age, person.gpa);
});
console.log("Two different ways to print the same thing ^ v");
for (let i = 0; i < people.length; i++) { // c++ way to iterate the array
    console.log(people[i].name, people[i].age, people[i].gpa);
}
;
// Modules 
// this TS file will get the class declaration of 'EmployeeClass' from the file 'Employee.ts' imported in the very first line of this file
let employee1 = new Employee_js_1.EmployeeClass("John", 28, 3.2, false);
employee1.print_details();
let employee2 = new Employee_js_1.EmployeeClass("Mary", 33, 3.8, true);
employee2.print_details();
console.log(employee1, employee2);
// employee1.age = 30; // this line throws an error as age is a readonly property
console.log(employee1.age); // this line DOES NOT throw an error as age is a readonly property, so it can be read from outside of the class declaration
// employee1.marital_status = true;  // this line throws an error as marital_status is a private property
// console.log(employee1.marital_status);    // this line ALSO throws an error marital_status is a private property, so it can neither be read nor written to from outside the class declaration
// comment out any lines that throw errors before moving ahead
let employees = [];
employees.push(employee1);
employees.push(employee2);
// employees.push(3);    // this line throws an error as 3 is not of type 'Person'.
console.log(employees);
employees.forEach(employee => {
    console.log(employee.name, employee.age, employee.gpa);
});
for (let i = 0; i < employees.length; i++) { // c++ way to iterate the array
    console.log(employees[i].name, employees[i].age, employees[i].gpa);
}
;
class Square {
    constructor(s) {
        this.side_length = s;
    }
}
class Circle {
    constructor(r) {
        this.radius = r;
        this.diameter = r * 2;
    }
    get_radius() {
        return this.radius;
    }
    get_diameter() {
        return this.diameter;
    }
}
class Equilateral_Triangle {
    constructor(s) {
        this.side_length = s;
    }
}
let square1 = new Square(4);
let equilateral_triangle1 = new Equilateral_Triangle(3);
let circle1 = new Circle(7); // circle1 is defined to be a Circle object with type HasRadius
let circle2 = new Circle(13); // circle2 is defined to be a Cicle object 
console.log(circle2.get_diameter());
console.log(circle2.diameter);
// circle2.diameter = 2; // will throw error cuz readonly
// let circle3 : HasRadius = new Square(5); 
let shapes_with_radii = [];
// shapes_with_radii.push(square1); // throws error cuz square does not have a get_radius method
// shapes_with_radii.push(equilateral_triangle1); // throws error cuz equilateral triangle does not have a get_radius method
shapes_with_radii.push(circle1);
shapes_with_radii.push(circle2);
let circles = [];
// circles.push(square1); // throws error cuz square is not of type Circle
// circles.push(equilateral_triangle1); // throws error cuz equilateral triangle is not of type Circle
// circles.push(circle1);  // this line throws an error because now circle1 is considered to be of type HasRadius even though it was initially a Circle Object. 
circles.push(circle2);
console.log(circles);
let person_quality1 = 'good';
// let person_quality2 : Quality = 'nothing'; // throws error cuz 'Quality' doesn't accept the value 'nothing'
let person_quality3 = 4;
let josh = {
    name: 'josh',
    age: 34,
    salary: 5000,
    employees_managing: 10
};
let jake = {
    name: 'jake',
    age: 37,
    salary: 7000,
    employees_managing: 8
};
console.log(josh);
console.log(jake);
let miranda = {
    name: "Miranda",
    age: 19,
    salary: 1000
};
console.log(miranda);
// // this throws an error as a type cannot be redefined to add properties
// type PersonT3{
//     salary: number;
// }
