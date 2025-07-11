import './App.css';
// import Provider from 'provider';
import HelloWorld from 'provider/HelloWorld';

const App = () => {
  return (
    <div className="content">
      {/* <Provider /> */}
      <HelloWorld x={ 10 }/>
    </div>
  );
};

export default App;
