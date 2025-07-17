import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

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

const RemoteApplication = lazy(() => import('remote/Button'));

const App = () => {
  // eslint-disable-next-line
  // @ts-ignore
    console.log('RemoteApplication:', RemoteApplication);
    return (
        <div>
        <h1>Привет, React!!!!! </h1>
      {/* <DefaultComponent /> */ }
        {/* <Button /> */}
        {/* @ts-ignore */}
        <Suspense fallback="loading">
          <RemoteApplication />
        </Suspense>
        </div>
  );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
