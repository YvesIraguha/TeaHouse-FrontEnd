import React from 'react';
import { Provider } from 'react-redux'
import Routes from './router'
import store from './redux'



const App = () => (<Provider store={store}>
  <Routes />
</Provider>);


export default App;
