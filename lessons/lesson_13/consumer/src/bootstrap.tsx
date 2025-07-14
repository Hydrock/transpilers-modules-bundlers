import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
    name: 'consumer',
    remotes: [
        {
            name: "provider",
            entry: "http://localhost:3001/mf-manifest.json"
        }
    ],
});

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
