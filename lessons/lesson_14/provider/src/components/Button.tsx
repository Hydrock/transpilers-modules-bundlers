import React from 'react';

const Button = ({ React2 }) => {
  console.log('React2 === React', React === React2);
  console.log('REMOTE BUTTON RENDER');
  // eslint-disable-next-line
  // @ts-ignore
  // const x = (
  //   <button style={{ padding: '8px 16px', fontSize: '16px' }}>
  //     111
  //   </button>
  // );

  // console.log('x:', x);
  // return x;
  try {
    console.log('React2.createElement:', React2.createElement);
  return React2.createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

export default Button;
