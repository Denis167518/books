import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Navigation from './navigation';
import store from './redux/createStore'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
