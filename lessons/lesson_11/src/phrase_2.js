export const phrase = 'phrase 2 wow222222222222';

console.error('log from phrase 2 module')

if (module.hot) {
    module.hot.accept(); // разрешаем Webpack просто перезапустить этот файл при HMR
}
