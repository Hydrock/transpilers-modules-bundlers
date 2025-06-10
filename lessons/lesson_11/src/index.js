import { getMessage } from './message';

const root = document.getElementById('root');
root.textContent = getMessage();

console.log('log from index module')

// // HMR API
if (module.hot) {
    module.hot.accept('./message.js', () => {
        console.log('wow44')
        const { getMessage } = require('./message.js');
        root.textContent = getMessage();
    });
}
