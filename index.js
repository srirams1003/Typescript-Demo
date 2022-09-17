"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
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
// import { EmployeeClass } from './Modules/Employee.js'
// console.log("Typescript Practice");
// Keep Uncommenting out chunks code as you start from the top of this file. Once finished with a chunk, comment it out again and move on to the next one.
// I left a lot of vertical space between two chunks in order to identify them.
// // JS version compatibility
// // the code below is only used as an example to demonstrate how the ts compiler compiles the ts code into js code based on the target js version specified in the tsconfig.json file.
// async function hello(){
//     console.log("Hello, World!");
//     return "Hi";
// };
// let a = hello();
// console.log(a);
// // async function example
// document.getElementById("asyncbutton").addEventListener("click", hangon);
// function timeout(ms : number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function hangon() {
//     alert("Yo!"); // this line is executed before the await line, so it pops up immediately.
//     await timeout(3000); // this line is executed only when you click 'OK' on the above alert popup.
//     alert("Thanks for clicking!"); // therefore, this line is only executed 3s after you click 'OK' on the first alert popup.
// }
// // the same function as above but without async await. Doesn't wait until the line above the current line in the function is executed.
// function timeout(ms : number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function hangon() {
//     alert("Yo!");
//     timeout(3000);
//     alert("Thanks for clicking!");
// }
// //  strong typing
// //  the code below has errors in it on purpose to show how strong typing in TS works. 
// let lucky1 : any = 23; // any is the default js data type
// lucky1 = '23' // since lucky1 is of the type 'any', it'll accept any type of variable.
// let lucky2 : number;
// lucky2 = 23;
// lucky2 = 'asthma' // will throw error as 'asthma' is not of type number
// let lucky3 : number = 27;    //the ' : number' is redundant as assigning it to 27 is enough for the compiler to know its a number
// lucky3 = 'a'; // will throw error
// lucky3 = 9;
// let lucky4 : string;
// lucky4 = 'cat';
// lucky4 = 4; // will throw error as 4 is not of type string.
// // interfaces
// interface isPen {
//     name: string;
//     ink: string;
//     cost: number;
//     format() : string;
//     [key : string] : any;   // this line allows you to let your variable of type 'isPen' have extra properties not mentioned in the interface declaration
// }
// let reynolds : isPen = {
//     name : 'reynolds',
//     ink: 'blue',
//     cost: 10,
//     format(){
//         return `A ${reynolds.name} costs ${reynolds.cost}.`;
//     }
// }
// console.log(reynolds.format());
// let new_pen : isPen = {
//     name: 'Mont Blanc',
//     ink: 'blue',
//     cost: 50,
//     format(){
//         return `A ${new_pen.name} costs ${new_pen.cost}.`;
//     },
//     remarks: 'good', // this property and the one below it can only be added since you have the add extra properties feature turned on in the interface declaration
//     cheap: false
// }
// console.log(`The color of the pen's ink is ${new_pen.ink}.`);
// console.log(new_pen.format());
// console.log(new_pen);
// new_pen.cost = 65;
// console.log(new_pen);
// // interfaces with extend
// interface Employee{
//     name : string;
//     age : number;
//     is_present : boolean;
// }
// interface Manager extends Employee{  // basically inheritance from OOP
//     number_managing : number;
// }
// let jane : Employee = {
//     name: 'jane',
//     age: 25,
//     is_present: true
// }
// let david : Manager = {
//     name: 'david',
//     age: 34,
//     is_present: true,
//     number_managing : 10
// }
// console.log(jane);
// console.log(david);
// // classes
// class Person {
//     public name: string;
//     readonly age: number;
//     gpa: number;    // since the data modifier for this property is not specified, it is assumed to be public
//     private marital_status: boolean;
//     constructor(n : string, a : number, g : number, m : boolean){
//         this.name = n;
//         this.age = a;
//         this.gpa = g;
//         this.marital_status = m;
//     }
//     print_details(){
//         let m_status : string;
//         if (this.marital_status){
//             m_status = 'married';
//         }
//         else{
//             m_status = 'single';
//         }
//         console.log(`${this.name} is ${this.age} years old. Their gpa is/was ${this.gpa} and they are ${m_status}.`)
//     }
// }
// let person1 = new Person("John", 28, 3.2, false);
// person1.print_details();
// let person2 = new Person("Mary", 33, 3.8, true);
// person2.print_details();
// console.log(person1, person2);
// person1.age = 30; // this line throws an error as age is a readonly property
// console.log(person1.age); // this line DOES NOT throw an error as age is a readonly property, so it can be read from outside of the class declaration
// person1.marital_status = true;  // this line throws an error as marital_status is a private property
// console.log(person1.marital_status);    // this line ALSO throws an error marital_status is a private property, so it can neither be read nor written to from outside the class declaration
// // comment out any lines that throw errors before moving ahead
// let people : Person[] =  [];
// people.push(person1);
// people.push(person2);
// people.push(3);    // this line throws an error as 3 is not of type 'Person'.
// console.log(people);
// people.forEach(person => {  // JS way to iterate the array
//     console.log(person.name, person.age, person.gpa);
// })
// for (let i = 0; i < people.length; i++){    // c++ way to iterate the array
//     console.log(people[i].name, people[i].age, people[i].gpa)
// };
// // Modules 
// // this TS file will get the class declaration of 'EmployeeClass' from the file 'Employee.ts' imported in the very first line of this file
// let employee1 = new EmployeeClass("John", 28, 3.2, false);
// employee1.print_details();
// let employee2 = new EmployeeClass("Mary", 33, 3.8, true);
// employee2.print_details();
// console.log(employee1, employee2);
// // employee1.age = 30; // this line throws an error as age is a readonly property
// console.log(employee1.age); // this line DOES NOT throw an error as age is a readonly property, so it can be read from outside of the class declaration
// // employee1.marital_status = true;  // this line throws an error as marital_status is a private property
// // console.log(employee1.marital_status);    // this line ALSO throws an error marital_status is a private property, so it can neither be read nor written to from outside the class declaration
// // comment out any lines that throw errors before moving ahead
// let employees : EmployeeClass[] =  [];
// employees.push(employee1);
// employees.push(employee2);
// // employees.push(3);    // this line throws an error as 3 is not of type 'Person'.
// console.log(employees);
// employees.forEach(employee => {  // JS way to iterate the array
//     console.log(employee.name, employee.age, employee.gpa);
// })
// for (let i = 0; i < employees.length; i++){    // c++ way to iterate the array
//     console.log(employees[i].name, employees[i].age, employees[i].gpa);
// };
// // classes with interfaces
// interface HasRadius {
//     get_radius() : number;
// }
// class Square {
//     side_length : number;
//     constructor (s : number){
//         this.side_length = s;
//     }
// }
// class Circle implements HasRadius {  // cannot create this class without a get_radius() function that returns a number
//     radius : number;
//     constructor (r : number){
//         this.radius = r;
//     }
//     get_radius(){
//         return this.radius
//     }
// }
// class Equilateral_Triangle {
//     side_length : number;
//     constructor (s : number){
//         this.side_length = s;
//     }
// } 
// let square1 = new Square(4);
// let equilateral_triangle1 = new Equilateral_Triangle(3);
// let circle1 : HasRadius = new Circle(7); // circle1 is defined to be a Circle object with type HasRadius
// let circle2 = new Circle(13); // circle2 is defined to be a Cicle object 
// // let circle3 : HasRadius = new Square(5); 
// let shapes_with_radii : HasRadius[] = [];
// shapes_with_radii.push(square1); // throws error cuz square does not have a get_radius method
// shapes_with_radii.push(equilateral_triangle1); // throws error cuz equilateral triangle does not have a get_radius method
// shapes_with_radii.push(circle1);
// shapes_with_radii.push(circle2);
// let circles : Circle[] = [];
// circles.push(square1); // throws error cuz square is not of type Circle
// circles.push(equilateral_triangle1); // throws error cuz equilateral triangle is not of type Circle
// circles.push(circle1);  // this line throws an error because now circle1 is considered to be of type HasRadius even though it was initially a Circle Object. 
// circles.push(circle2); 
// // the takeway from the above 10 lines of code is that you mostly use classes with interfaces to make an object stick to a criteria. Not usually to assign to a variable's type.
// // types
// type Quality = 'good' | 'bad' | 4;
// let person_quality1 : Quality = 'good';
// let person_quality2 : Quality = 'nothing'; // throws error cuz 'Quality' doesn't accept the value 'nothing'
// let person_quality3 : Quality = 4; 
// let person_quality4 : Quality = 5; // throws error cuz 'Quality' doesn't accept the value 5
// type Person = {
//     name: string;
//     age: number;
// }
// type Employee  = {
//     salary: number;
// }
// type Manager = { 
//     employees_managing : number;
// }
// let josh : Manager & Employee & Person = { // The '&' operator requires that your variable has all the properties of all the three types defined above
//     name: 'josh',
//     age: 34,
//     salary: 5000,
//     employees_managing: 10
// }
// let jake : Manager | Employee | Person = { // The '|' operator requires that your variable has all the properties of at least one of the three types defined above
//     name: 'jake',
//     age: 37,
//     salary: 7000,
//     employees_managing: 8
// }
// types vs interfaces
// Difference 1.
// //  an interface can extend an interface. (Inheritance)
// interface Person{
//     name: string;
//     age: number;
// }
// interface Employee extends Person{
//     salary: number;
// }
// vs
// // a type CANNOT extend a type.
// type Person{
//     name: string;
//     age: number;
// }
// type Employee extends Person{
//     salary: number;
// }
// Difference 2.
// // can redefine an interface to add more properties
// interface Person{
//     name: string;
//     age: number;
// }
// interface Person{
//     salary: number;
// }
// let miranda : Person = {
//     name: "Miranda",
//     age: 19,
//     salary: 1000
// }
// console.log(miranda);
// vs
// // cannot however redefine a type to add more properties
// type Person{
//     name: string;
//     age: number;
// }
// type Person{
//     salary: number;
// }
