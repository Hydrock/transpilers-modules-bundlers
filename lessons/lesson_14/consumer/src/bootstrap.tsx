import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line
// @ts-ignore
import Button from 'provider/Button';
console.log('Button:', Button);

// eslint-disable-next-line
// @ts-ignore
// import DefaultComponent from 'provider'
// console.log('DefaultComponent:', DefaultComponent);

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
        <h1>Привет, React!!!!! </h1>
      {/* <DefaultComponent /> */ }
    <Button />
        </div>
  );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
