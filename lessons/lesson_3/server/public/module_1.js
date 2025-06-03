import { React, ReactDOM } from 'https://unpkg.com/es-react';
console.log('React:', React);
console.log('ReactDOM:', ReactDOM);

// export const MyComponent = () => {
//     return React.createElement(
//         'div',
//         { style: { padding: '20px', backgroundColor: '#f0f0f0' } },
//         React.createElement('h2', null, 'Привет из компонента!'),
//         React.createElement('p', null, 'Это компонент без JSX.')
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement(MyComponent));

ReactDOM.render(
    React.createElement('h1', {}, 'Hello from es-react'),
    document.body
);


const module_1 = {
    hello: () => {
        console.log("Hello from module 1");
    }
};

export default module_1;
