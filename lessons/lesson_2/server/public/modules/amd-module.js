define([], function () {
    function greet(name) {
        return `Привет, ${name}!`;
    }

    // Возвращаем публичный API модуля
    return {
        greet,
    };
});
