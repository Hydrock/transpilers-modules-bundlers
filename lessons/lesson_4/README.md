# lesson 5

Start of Webpack

https://webpack.js.org/configuration/devtool/

## Рассказать

- Старт сборки на webpack
- Базовый конфиг
- Погрузиться в sourceMap
- //# sourceURL=webpack://lesson_4/./src/index.js? - рассказать про спец команду у eval

https://sokra.github.io/source-map-visualization/

## Что такое UMD-модуль

**UMD (Universal Module Definition)** — это универсальный формат JavaScript-модуля, совместимый сразу с тремя основными системами:

- **CommonJS** (используется в Node.js)
- **AMD** (используется в RequireJS)
- **глобальная переменная** (в браузере через `<script>`)

UMD-модули позволяют использовать одну и ту же библиотеку в разных окружениях без изменений.

### Пример простого UMD-модуля

```js
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
  function hello() {
    console.log('Hello from UMD module!');
  }

  return {
    hello
  };
}));
```
