import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './custom-style.css';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact.js";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Donation from "./pages/Donation/Donation";
import Events from "./pages/Events/Events";
import Blogs from "./pages/Blogs/Blogs";
import Admin from "./pages/Admin/Admin";
import Error404 from "./pages/Error404/Error404";
import Event from "./components/Card/Event";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import User from "./pages/User/User";
import SignUp from "./pages/Login/SignUp";
import ResetPassword from "./pages/Login/ResetPassword";
import Post from "./pages/Blogs/Post";
import ViewPost from "./pages/Blogs/ViewPost";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import Home from './pages/Home/Home';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route path="home" element={<Home />}></Route>

            <Route path="donation" element={<PrivateRoute><Donation /></PrivateRoute>}></Route>

            <Route path="events" element={<Events />}></Route>

            <Route path="event" element={<Event />}></Route>

            <Route path="blogs" element={
                <PrivateRoute>
                  <Blogs />
                </PrivateRoute>
                
              }>
                 <Route index element={<Post />}></Route>
                 <Route path='post' element={<Post />}></Route>
                 <Route path='viewPost' element={<ViewPost />}></Route>
              </Route>

            {/* <Route path="post" element={<Post />}></Route> */}
            <Route path="about" element={<About />}></Route>

            <Route path="contact" element={<Contact />}></Route>

            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>

            <Route
              path="user"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="register"
              element={
                <PrivateRoute>
                  <Register />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            ></Route>

            <Route path="*" element={<Error404 />}></Route>
          </Routes>
          <Footer></Footer>
          
        </main>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
