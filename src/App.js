import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import store from './redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Home = () => (<Provider store={store}>
  <App />
</Provider>);


export default Home;
