// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom'
import Detail from './component/pages/Detail';
import Refractor from './component/pages/Refractor';


function App() {
  return (
    <Fragment>
      <div className='App'>
        <Header />
        <h1>you are at home page</h1>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/component/pages/Refractor' element={<Refractor />} />
          <Route path='/component/pages/Detail' element={<Detail />} />
        </Routes>
      </div>
    </Fragment>

  );
}

export default App;
