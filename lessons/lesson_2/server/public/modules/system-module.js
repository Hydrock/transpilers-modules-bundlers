System.register([], function (exports) {
    return {
        setters: [],
        execute: function () {
            function greet(name) {
                return `Привет, ${name}!`;
            }

            // Экспорт функции
            exports('greet', greet);
        }
    };
});
