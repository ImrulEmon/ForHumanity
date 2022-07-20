import React from 'react';
import {
  BrowserRouter as Router,
  Route,
 Routes
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About  from './pages/About/About';
import Navbar  from './components/Navbar/Navbar';
 import Contact  from './pages/Contact/Contact.js';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Donation from './pages/Donation/Donation';
import Events from './pages/Events/Events';
import Blogs from './pages/Blogs/Blogs';
import Admin from './pages/Admin/Admin';
import Error404 from './pages/Error404/Error404';
import Event from './components/Card/Event';
import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';

const App = () => {
  return (
   <Router>
   <Navbar></Navbar>
    <main>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
     
        <Route path='donation' element={<Donation />}></Route>

        <Route path='events' element={<Events/>}></Route>
        
        <Route path='event' element={<Event/>}></Route>

        <Route path='blogs' element={<Blogs/>}></Route>

        <Route path='about' element={<About />}></Route>
      
        <Route path='contact' element={<Contact />}></Route>
      
        <Route path='login' element={<Login />}></Route>
     
        <Route path='register' element={<Register />}></Route>

        <Route path='admin' element={<Admin />}></Route>

        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </main>
    <Footer></Footer>
   </Router>
  );
}

export default App;
