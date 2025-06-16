let count = (module.hot && module.hot.data && module.hot.data.count) || 0;
const interval = setInterval(() => {
    console.log("Counter1:", ++count);
}, 1000);

if (module.hot) {
    module.hot.dispose((data) => {
        data.count = count; // сохранится в следующую версию модуля
        clearInterval(interval); // иначе будет утечка
    });

    module.hot.accept();
}
