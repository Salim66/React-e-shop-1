import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Fragment } from 'react';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <Fragment>
      <Header />
      <Shop />

    </Fragment>
  );
}

export default App;
