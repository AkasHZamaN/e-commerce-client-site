import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ServiceDetails from './Pages/ServiceDetails';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div> 
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/service/:id' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
