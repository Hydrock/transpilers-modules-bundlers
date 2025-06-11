import { getMessage } from './message';
import { phrase } from './phrase_2.js';

const root = document.getElementById('root');
root.textContent = getMessage();

console.error('log from index module')
console.error('phrase 2', phrase)

// // HMR API
if (module.hot) {
    module.hot.accept('./phrase.js', () => {
        console.error('callback from index js = subscribe')
        const { getMessage } = require('./message.js');
        root.textContent = getMessage();
    });
}
