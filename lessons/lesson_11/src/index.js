import { getMessage } from './message';
import './interval.js';

const root = document.getElementById('root');
root.textContent = getMessage();

console.error('log from index module')

// HMR API
if (module.hot) {
    module.hot.accept('./message.js', () => {
        console.error('callback from index js = subscribe')
        const { getMessage } = require('./message.js');
        root.textContent = getMessage();
    });
}
