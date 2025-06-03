const module_1 = require('./module_1');
const module_2 = require('./module_2');
const module_3 = require('./module_3');
const module_4 = require('./module_4');

module_1.hello();
// особенность транспиляции webpapck модулей в es6 в commonJS
module_2.module.hello();
module_3.hello();
module_4.hello();
