import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/signup'
          element={<Signup />}></Route>
        <Route
          path='/login'
          element={<Login />}></Route>
        <Route
          path='/home'
          element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
