
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  const user = localStorage.getItem("user");
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
