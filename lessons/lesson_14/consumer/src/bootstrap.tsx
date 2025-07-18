import React, { lazy, Suspense, useEffect, useState } from 'react';
console.log('React:', React);
import { createRoot } from 'react-dom/client';

import { initContainer, loadScript } from '../utils/container';

async function init() {
  await loadScript('http://localhost:3001/remoteEntry.js', 'id');

  return initContainer();
}

// eslint-disable-next-line
// @ts-ignore
// import Button from 'provider/Button';
// console.log('Button:', Button);

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


// const RemoteApplication = lazy(() => import(`${path}`));

//   return (
    // <Suspense fallback={<CircularProgress />}>
    //   <RemoteApplication basename={name} />
    // </Suspense>
//   );

// const RemoteApplication = lazy(() => import('remote/Button'));

const App = () => {
  const [Component, setComponent] = useState(undefined);

  console.log('Button render:', typeof useState); // из remote-компонента

  useEffect(() => {

    (async function() {
      const Module = await init();
      if (Module) {
        console.log('Module111:', Module);
        setComponent(() => Module.default || Module);
      }
    })()
    
  }, []);

  // eslint-disable-next-line
  // @ts-ignore
    return (
        <div>
        <h1>Привет, React!!!!! </h1>
      {/* <DefaultComponent /> */ }
        {/* <Button /> */}
        {/* @ts-ignore */}
        {/* <Suspense fallback="loading">
          <RemoteApplication />
        </Suspense> */}
        {/* @ts-ignore */}
        {/* <Suspense fallback="loading">
          {
            Component && (
              // eslint-disable-next-line
              // @ts-ignore
              <Component />
            )
          }
        </Suspense> */}
        { console.log('Component11', Component) }
        11111
        {
            Component && (
              // eslint-disable-next-line
              // @ts-ignore
              <Component React2={ React } />
            )
          }
          222222
        </div>
  );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
