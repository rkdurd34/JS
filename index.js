// // alert("i hit this")
// console.log("i will do this");


// let a = 221;
// let b = a - 5;
// const c = 5
// console.log("const는 바꿀 수 없고 let은 바꿀 수 있음")

// const what = "kang";
// const wat = true;
// const wat_float = 55.22;

// const mon = "mon"
// const tue = "tue"
// const wed = "wed"
// const thu = "thu"
// const fri = "fri"
// const something = 'ggg'
// const days_of_week = [mon, tue, wed, thu, fri, something, "ddd"]


// console.log(days_of_week)

// const nicoinfo = {
//     name: 'nico',
//     age: 33,
//     gender: "male",
//     favmovies: ["along the gods", 'lotr'],
//     favfood: [
//         {
//             name: "kimchi",
//             fatty: false,
//         },
//         {
//             name: "cheese burger",
//             fatty: true,
//         }
//     ],
//     ishandsome: true,
// }
// nicoinfo.gender = "female"
// console.log(nicoinfo.gender)
// console.log(nicoinfo);

// function sayHello(name, age) {
//     return (`hello ${name}  you are ${age} years old`);
// }
// console.log(sayHello("hhhhhh", 14));
// const calculator = {
//     plus: function (a, b) {
//         return a + b
//     },
//     minus: function (a, b) {
//         return a - b
//     }
// }
// console.log(calculator.minus(6, 2))





// title.innerHTML = "heelo"




const title = document.querySelector("#hooah");

console.log(title)
const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    
    console.log(title)
    console.log(title.style.color)
    console.log(currentColor)
    console.log(BASE_COLOR)
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
        console.log("작동")
    } else {
        title.style.color = BASE_COLOR;
    }
}


function init() {
    console.log("이것은init")
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    console.log("dom event 종류는 MDN")
};
init();






