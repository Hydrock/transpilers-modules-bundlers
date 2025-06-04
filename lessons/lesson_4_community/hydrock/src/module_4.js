(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Глобальная переменная (в браузере)
        root.myUMDModule = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // Ваш код модуля внутри этой функции
    function hello() {
        console.log('Hello from UMD module!');
    }

    return {
        hello
    };
}));
