// JS version compatibility
// the code below is only used as an example to demonstrate how the ts compiler compiles the ts code into js code based on the target js version specified in the tsconfig.json file.


async function hello() {
    console.log("Hello, World!");
    return "Hi";
};

let a = hello();
console.log(a);







// async function example

document.getElementById("asyncbutton").addEventListener("click", hangon);

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hangon() {
    alert("Yo!"); // this line is executed before the await line, so it pops up immediately.
    await timeout(3000); // this line is executed only when you click 'OK' on the above alert popup.
    alert("Thanks for clicking!"); // therefore, this line is only executed 3s after you click 'OK' on the first alert popup.
}







// // the same function as above but without async await. Doesn't wait until the line above the current line in the function is executed.

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function hangon() {
//     alert("Yo!");
//     timeout(3000);
//     alert("Thanks for clicking!");
// }





