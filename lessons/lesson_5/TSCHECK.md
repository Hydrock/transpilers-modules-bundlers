# 🧠 Объяснение конструкции

`@ts-check` и `@type {import('webpack').Configuration}`

Эта конструкция используется в JavaScript-файлах для подключения проверки типов TypeScript и автодополнения, не переходя на `.ts`.

---

## 📌 Разбор по частям

### 1. `// @ts-check`

Это директива, которая включает проверку типов TypeScript в `.js`-файлах.

- Работает в редакторах, таких как VS Code.
- Без неё TypeScript не будет проверять типы в обычных JavaScript-файлах.

✅ Полезно для выявления опечаток и ошибок без перехода на TypeScript.

---

### 2. `@type {import('webpack').Configuration}`

Это JSDoc-аннотация, которая сообщает редактору:  
“эта переменная соответствует типу `Configuration` из пакета `webpack`”.

```js
/** @type {import('webpack').Configuration} */
const config = { ... }
