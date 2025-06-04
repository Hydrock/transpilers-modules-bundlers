# Lesson 5

## Links

https://webpack.js.org/concepts/modules/#what-is-a-webpack-module
https://webpack.js.org/concepts/output/

---

После компиляции Webpack преобразует все модули (будь то CommonJS, ESM, AMD и т.д.) в единую внутреннюю систему модулей, и в финальном бандле уже нет “настоящих” require, import или export.

## 🔄 Что делает Webpack при сборке:

1 - Анализ импортов

Он парсит каждый модуль и строит граф зависимостей (dependency graph), определяя все импорты и экспорты.

2 - Преобразование форматов

• import/export → превращаются во внутренние вызовы, например:

```js
import { foo } from './mod.js';
```

станет:

```js
var __mod = __webpack_require__(123);
var foo = __mod.foo;
```

require() из CommonJS → тоже заменяется на __webpack_require__.

## 📦 Что в итоге в бандле?

Webpack оборачивает всё примерно так:

```js
(() => {
  var __webpack_modules__ = {
    123: (module, __webpack_exports__, __webpack_require__) => {
      // исходный модуль, уже в виде функции
    }
  };

  var __webpack_require__ = moduleId => {
    // логика кэширования и загрузки модулей
  };

  var __webpack_exports__ = __webpack_require__(123);
})();
```

✅ Вывод

🔹 Webpack “съедает” все формы модулей (CJS, ESM, AMD) и превращает их в свою внутреннюю систему на основе __webpack_require__.
🔹 Никаких import, export, require в финальном бандле не остаётся в их исходном виде.
🔹 Это и есть причина, почему Webpack умеет смешивать разные типы модулей — он унифицирует их при сборке.

---

## Webpack externals

В Webpack externals — это способ исключить определённые зависимости из итогового бандла, предположив, что они уже доступны во внешней среде (например, глобально через <script> или node_modules в runtime).

✅ Как задать externals

📁 webpack.config.js

```js
externals: {
  <имя_модуля>: <формат> <имя_модуля_в_рантайме>
}
```

```js
module.exports = {
  // ...
  externals: {
    react: 'React',             // например, React уже загружен через CDN
    'react-dom': 'ReactDOM',   // то же для ReactDOM
  }
};
```

📦 Это значит: не включать react и react-dom в бандл, вместо этого использовать глобальные переменные React и ReactDOM.

| Формат       | Пример значения        | Что произойдёт в бандле                                 |
|--------------|------------------------|----------------------------------------------------------|
| `commonjs`   | `'commonjs fs'`        | `require("fs")` останется как есть                      |
| `commonjs2`  | `'commonjs2 fs'`       | Аналогично `commonjs`, используется в некоторых UMD     |
| `amd`        | `'amd lodash'`         | `define(["lodash"], ...)`                               |
| `umd`        | `'umd jquery'`         | UMD-обёртка (универсальный модуль)                      |
| `var`        | `'var React'`          | Использует глобальную переменную `React`                |
| `window`     | `'window.React'`       | Использует `window.React`                               |
| `this`       | `'this.jQuery'`        | Использует `this.jQuery`                                |
| `global`     | `'global._'`           | Использует `global._` (например, в Node.js окружении)   |

В externals Webpack не поддерживает формат ESM (ES6 модули с import/export) напрямую, и вот почему:

❗ Почему нет esm в externals?

📦 Webpack сам “управляет” импортами

Webpack не может оставить import в коде так, как он может оставить require("..."), потому что:
 • import/export работают только в модулях с типом type="module", и только на верхнем уровне.
 • Они требуют статического анализа и не могут быть вызваны динамически.
 • Они не совместимы с UMD/CommonJS системами загрузки.

```js
// Webpack может оставить так:
externals: {
  lodash: 'commonjs lodash'
}
// => в бандле будет: require("lodash")

// Но он не может сделать:
externals: {
  lodash: 'esm lodash' // ❌ не работает!
}
// => нельзя оставить: import _ from "lodash"
```

import должен быть в заголовке файла, а Webpack не может гарантировать, что получатель будет в type="module" окружении.

 • externals в Webpack работает только с форматами, которые можно выразить в виде require, define, global, и т.п.
 • ESM import не может быть подставлен как строка — поэтому такой формат не поддерживается.
 • Если нужен ESM — используй import() или script type="module" вне Webpack.

---

🎯 Что такое target?

Параметр target в Webpack определяет целевую платформу, для которой собирается код. Это влияет:
 • на генерацию итогового JavaScript,
 • на поведение сборки (какие встроенные модули доступны),
 • на способ загрузки модулей (require, import, define, и т.д.),
 • на то, включать ли Webpack полифиллы для fs, net, и т.п.

📘 Примеры значений target и их назначение:

| Значение       | Описание                                                                 |
|----------------|--------------------------------------------------------------------------|
| `web`          | (по умолчанию) Сборка для браузера. Использует глобальные объекты типа `window`, `document`. |
| `webworker`    | Для окружения Web Worker. Нет `window`, но есть `self`.                 |
| `node`         | Для Node.js. Не полифилит модули типа `fs`, `path`. Использует `require`. |
| `async-node`   | То же, что `node`, но с асинхронной загрузкой модулей.                   |
| `node-webkit`  | Для приложений на базе NW.js.                                            |
| `electron-main`| Для `main`-процесса Electron.                                            |
| `electron-renderer` | Для `renderer`-процесса Electron (подобен `web`).                 |
| `browserslist` | В Webpack 5 можно указать `"browserslist"`, и Webpack использует `.browserslistrc`. |

🧩 Примеры использования:

🔹 Сборка для Node.js:

```js
// webpack.config.js
module.exports = {
  target: 'node',
};
```

✅ Webpack:
 • Не будет полифилить fs, path, crypto, и т.п.
 • Сгенерирует код с require, __dirname и т.д.
 • Полезно для SSR или CLI-приложений.

🔹 Сборка для браузера:

```js
module.exports = {
  target: 'web',
};
```

✅ Webpack:
 • Добавит полифиллы для Buffer, process, crypto (если нужны). (❗ Webpack 5 больше не полифилит модули Node.js)
 • Генерирует код, совместимый с браузерами.
 • Это значение по умолчанию.

🔹 Сборка для Web Worker:

```js
module.exports = {
  target: 'webworker',
};
```

✅ Webpack:
 • Использует self вместо window.
 • Не будет генерировать DOM-зависимый код.

⚠️ Зачем это важно?
 • Если ты собираешь Node.js-приложение и не укажешь target: 'node', Webpack начнёт пытаться полифилить системные модули (например, fs, path) — это вызовет ошибки. (!!! раньше полифилил - сейчас нет)
 • Если ты собираешь браузерный виджет, но укажешь target: 'node' — в бандле будет require, который браузеры не понимают.

📉 Что изменилось в Webpack 5?

В Webpack 5 автоматические полифиллы отключены по умолчанию, чтобы:
 • уменьшить размер бандлов,
 • дать разработчику больше контроля,
 • избегать неожиданных зависимостей.

✅ Как включить полифиллы вручную

1 - Установить необходимые зависимости

```sh
npm install buffer process util stream-browserify path-browserify crypto-browserify
```

2 - Добавить fallback’и в webpack.config.js:

```js
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: ['process'],
    }),
  ],
};
```

🧠 Альтернатива: избегать Node.js API в коде для браузера

Если ты разрабатываешь фронтенд, старайся не использовать API Node.js напрямую. Например:
 • Заменить Buffer на TextEncoder/TextDecoder
 • Заменить path на string operations
 • Заменить crypto на window.crypto (WebCrypto API)

🔚 Вывод
 • Да, Webpack 5 не добавляет полифиллы автоматически.
 • Теперь ты должен явно указывать, что тебе нужно, и включать полифиллы вручную.
 • Это делает бандлы легче и безопаснее.
