let count = 0;
const el = document.getElementById('app');
const timer = setInterval(() => {
    el.textContent = `Count: ${++count}`;
}, 1000);

if (module.hot) {
    module.hot.accept();

    module.hot.dispose(() => {
        clearInterval(timer);
        console.log('Очистка старого таймера');
    });
}

console.log('2o2')
