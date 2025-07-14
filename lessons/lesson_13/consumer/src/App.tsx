import React from 'react';
import './App.css';
// import Provider from 'provider';
// import HelloWorld from 'provider/HelloWorld';
import { loadRemote } from '@module-federation/enhanced/runtime';

const App = () => {
  const Provider = React.lazy(() =>
    // eslint-disable-next-line
    // @ts-ignore
    loadRemote('provider').then((obj: any) => {
      return obj;
    }),
  );

  const HelloWorld = React.lazy(() =>
    // eslint-disable-next-line
    // @ts-ignore
    loadRemote('provider/HelloWorld').then((obj: any) => {
      return obj;
      // console.log('obj:', obj);
      // const HelloWorld = obj.default;
      // return {
      //   default: HelloWorld
      // };
    }),
  );

  return (
    <div className="content">
      {/* <Provider /> */}
      {/* <HelloWorld x={ 10 }/> */}
      <React.Suspense fallback="Loading Button">
        <Provider />
        <HelloWorld />
      </React.Suspense>
    </div>
  );
};

export default App;
