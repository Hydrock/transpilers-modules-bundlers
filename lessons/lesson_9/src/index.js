import { X } from "./module_1.js";
import Y from "./module_2.js";
console.log('XXXXXXXXxxxxxxxxxxxxxxxx:', X);
console.log('YYY:', Y);

let count = 100;
const el = document.getElementsByTagName('body')
const timer = setInterval(() => {
    el[0].textContent = `Count: ${++count}`;
}, 1000);

// if (module.hot) {
//     module.hot.accept();

//     module.hot.dispose(() => {
//         clearInterval(timer);
//         console.log('Очистка старого таймера');
//     });
// }

