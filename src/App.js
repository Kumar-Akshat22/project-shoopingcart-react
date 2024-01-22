import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <div className='bg-slate-900'>
        <NavBar />
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
