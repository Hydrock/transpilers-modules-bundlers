import React from 'react';
import { createRoot } from 'react-dom/client';

// import { init, loadRemote } from '@module-federation/enhanced/runtime';

// init({
//     name: 'consumer',
//     remotes: [
//         {
//             name: "provider",
//             entry: "http://localhost:3001/mf-manifest.json"
//         }
//     ],
// });

const App = () => {
  return (
    <div>
      <h1>Привет, React!</h1>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
