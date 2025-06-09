import { getMessage } from './message';

const root = document.getElementById('root');
root.textContent = getMessage();

// HMR API
if (module.hot) {
    module.hot.accept('./message.js', () => {
        const { getMessage } = require('./message.js');
        root.textContent = getMessage();
    });
}
