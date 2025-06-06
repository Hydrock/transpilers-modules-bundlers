# Lesson 7

Разница между резолюцией модулей в Node.js и Webpack заключается в том, как они находят и интерпретируют файлы модулей. Несмотря на общую схожесть (Webpack вдохновлён системой резолюции Node.js), между ними есть ключевые различия:

💡 Примеры

Node.js

## 🔍 Сравнение резолюции модулей в Node.js и Webpack

| Характеристика                    | Node.js                                                                 | Webpack                                                                       |
|----------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 🔍 Алгоритм резолюции            | [Node.js resolution algorithm](https://nodejs.org/api/modules.html#modules_all_together) | Использует `enhanced-resolve`, который **переопределяет** стандарт Node.js    |
| 📁 Extensions (расширения)       | `.js`, `.json`, `.node` (по умолчанию)                                 | Можно настраивать через `resolve.extensions`                                   |
| 📌 Алиасы                        | Не поддерживаются                                                      | Можно задать через `resolve.alias`                                             |
| 🌐 Полифиллы (например `fs`)     | `fs` доступен в среде Node.js                                           | Webpack не включает полифиллы по умолчанию с версии 5, вызывает ошибку         |
| 📦 Обработка `package.json#main`| Да                                                                      | Да, и дополнительно может использовать `exports`, `browser`, `module` и др.    |
| 🌲 Модули ESM/CJS                | CJS и ESM (оба поддерживаются)                                         | Тоже поддерживает оба, но возможны тонкости с `type: "module"` и `output.module` |
| 🧱 Виртуальные модули            | Нет                                                                     | Возможно, через плагины и `virtual modules`                                     |
| 📁 Загрузка ассетов              | Нет                                                                     | Да — можно импортировать `.css`, `.svg`, `.png`, `.md` и др.                   |
| 🔍 resolve fallback              | Не применимо                                                           | Можно задать `resolve.fallback`, чтобы заменить модули из Node.js              |
| 📚 Tree shaking                  | Нет                                                                     | Да, если используется ESM                                                      |

```js
// Ищет index.js по путям: ./lib/index.js, ./lib.js и т.д.
const lib = require('./lib');
```

Webpack (webpack.config.js)

```js
resolve: {
  extensions: ['.ts', '.js', '.json'],
  alias: {
    '@components': path.resolve(__dirname, 'src/components/'),
  },
  fallback: {
    fs: false, // отключает резолюцию ноды
  },
}
```

## Вывод

Что использовать?
Node.js: для исполнения серверного кода, использует строгий стандарт.
Webpack: для сборки фронтенда, даёт больше гибкости, но требует настройки.

---

Node.js resolution algorithm - https://nodejs.org/api/modules.html#modules_all_together

NodeJS module resolution summary - https://stackoverflow.com/questions/48594600/nodejs-module-resolution-summary

What’s really wrong with node_modules and why this is your fault - https://hackernoon.com/whats-really-wrong-with-node-modules-and-why-this-is-your-fault-8ac9fa893823

Webpack Module Resolution - https://webpack.js.org/concepts/module-resolution/


## Module Resolution

Резолвер (Resolver) — это библиотека, которая помогает определить абсолютный путь к модулю. Один модуль может быть подключён как зависимость из другого модуля следующим образом:

```js
import foo from 'path/to/module';
// or
require('path/to/module');
```

Модуль-зависимость (dependency module) может быть как частью кода приложения, так и сторонней библиотекой. Резолвер помогает Webpack находить код модуля, который необходимо включить в финальный бандл для каждого такого выражения `require` или `import`. Webpack использует библиотеку `enhanced-resolve` для определения путей к файлам при сборке модулей.

## Resolving rules in webpack

С помощью `enhanced-resolve` Webpack может обрабатывать три типа путей к файлам:

### Absolute paths

```js
import '/home/me/file';

import 'C:\\Users\\me\\file';
```

Поскольку абсолютный путь к файлу уже известен, дополнительное разрешение не требуется.

### Relative paths

```js
import '../src/file1';
import './file2';
```

В этом случае каталог исходного файла, в котором используется `import` или `require`, считается контекстным каталогом (`context directory`). Относительный путь, указанный в `import/require`, объединяется с этим контекстным путем для получения абсолютного пути к модулю.

### Module paths

```js
import 'module';
import 'module/lib/file';
```

Модули ищутся во всех директориях, указанных в параметре `resolve.modules` (https://webpack.js.org/configuration/resolve/#resolvemodules). Вы можете заменить исходный путь к модулю на альтернативный, создав для него псевдоним с помощью опции конфигурации `resolve.alias`.

- Если пакет содержит файл `package.json`, то поля, указанные в опции конфигурации `resolve.exportsFields`, проверяются по порядку. Первое найденное поле в package.json определяет доступные экспорты из пакета в соответствии с рекомендациями по использованию exports.

После того как путь разрешён на основе вышеупомянутого правила, резолвер проверяет, указывает ли он на файл или каталог. Если путь указывает на файл:
 • Если путь уже содержит расширение файла, то файл сразу включается в бандл.
 • В противном случае расширение подбирается автоматически с помощью параметра resolve.extensions, который указывает, какие расширения допустимы для резолюции (например, .js, .jsx).

Если путь указывает на каталог, то для определения нужного файла с подходящим расширением выполняются следующие шаги:
 • Если каталог содержит файл package.json, то поля, указанные в параметре resolve.mainFields, проверяются по порядку. Первое найденное подходящее поле определяет путь к файлу.
 • Если package.json отсутствует или поля из resolve.mainFields не возвращают корректный путь, то Webpack ищет имена файлов, указанные в параметре resolve.mainFiles, по порядку, проверяя, существует ли соответствующий файл в импортируемом каталоге.
 • Далее расширение файла разрешается аналогично с помощью параметра resolve.extensions.

Webpack предоставляет разумные значения по умолчанию для этих параметров в зависимости от вашей целевой платформы сборки.

## Caching

Каждое обращение к файловой системе кэшируется, чтобы повторные (параллельные или последовательные) запросы к одному и тому же файлу обрабатывались быстрее. В режиме наблюдения (watch mode) из кэша удаляются только изменённые файлы. Если режим наблюдения отключён, кэш полностью очищается перед каждой новой компиляцией.

Webpack хранит кеш резолюции модулей в оперативной памяти во время компиляции.

Вот как это работает:
 • 🧠 Во время сборки: все обращения к файловой системе (например, fs.stat, fs.readFile, fs.readdir) кешируются в памяти. Это позволяет избежать повторных обращений к диску при резолвинге одних и тех же путей.
 • 🔁 В режиме watch (--watch): Webpack отслеживает изменения файлов и удаляет из кэша только те пути, которые были затронуты. Остальное остаётся в памяти для ускорения повторных сборок.
 • 🧹 В обычном (одиночном) режиме: после завершения сборки Webpack очищает кеш перед следующей компиляцией, чтобы избежать использования устаревших данных.

Webpack использует под капотом библиотеку `enhanced-resolve`, а кэш реализован через простую `in-memory map/Set-структуру` (не `persistent` и не на диске, если не включён cache: '`filesystem`', но это другое).

## Конфигурация Resolve
https://webpack.js.org/configuration/resolve/

