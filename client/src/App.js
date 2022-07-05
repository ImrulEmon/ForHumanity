import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
 Routes
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About  from './pages/About/About';
import Navbar  from './components/Navbar/Navbar';
 import Contact  from './pages/Contact/Contact.js';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// import Home from './pages/Home/Home';

const App = () => {
  return (
   <Router>
   <Navbar></Navbar>
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='about' element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
      <Routes>
        <Route path='login' element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path='register' element={<Register />}></Route>
      </Routes>
    </main>
   </Router>
  );
}

export default App;
