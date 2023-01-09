import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Pages/Home'
import Navbar from './component/header/Header'
import Users from './component//Pages/User'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> Home </Route>
        <Route path='/Users' element={<Users />}>UserDetail</Route>
      </Routes>
    </div>
  );
}

export default App;