// Two ways to export a class:
// 1. Have the export keyword in front of the class declaration and be done with it.
// 2. Exclude the export keyword from in front of the class declaration and instead add a line at the end saying ' export { <name of class> } '
// Way 1.
// export class EmployeeClass {
//         public name: string;
//         readonly age: number;
//         gpa: number;    // since the data modifier for this property is not specified, it is assumed to be public
//         private marital_status: boolean;
//         constructor(n : string, a : number, g : number, m : boolean){
//             this.name = n;
//             this.age = a;
//             this.gpa = g;
//             this.marital_status = m;
//         }
//         print_details(){
//             let m_status : string;
//             if (this.marital_status){
//                 m_status = 'married';
//             }
//             else{
//                 m_status = 'single';
//             }
//             console.log(`${this.name} is ${this.age} years old. Their gpa is/was ${this.gpa} and they are ${m_status}.`)
//         }
//     }
// Way 2.
class EmployeeClass {
    // public name: string;
    // readonly age: number;
    // public gpa: number;
    // private marital_status: boolean;
    constructor(n, a, g, m) {
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
export { EmployeeClass };
