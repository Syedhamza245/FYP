import React from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Whatwedo from './pages/Whatwedo.jsx';
import Filter from './pages/Filter.jsx';
import Destination from './pages/Destination.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Signin from "./components/Signin.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import PrivateRoute from './components/Private.jsx';
import Faqs from './pages/Faqs.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  const location = useLocation();  // Get the current route

  // Define paths where the Chatbot should be hidden
  const hideChatbotPaths = ['/signin', '/register'];

  // Check if the current path matches any of the paths where the chatbot should be hidden
  const shouldHideChatbot = hideChatbotPaths.some(path => matchPath(path, location.pathname));

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/whatwedo" element={<PrivateRoute element={<Whatwedo />} />} />
        <Route path="/filter" element={<PrivateRoute element={<Filter />} />} />
        <Route path="/destination" element={<PrivateRoute element={<Destination />} />} />
        <Route path="/contactus" element={<PrivateRoute element={<ContactUs />} />} />
        <Route path="/FAQ's" element={<PrivateRoute element={<Faqs />} />} />
      </Routes>
      {/* Conditionally render Chatbot based on the current route */}
      {!shouldHideChatbot && (
        <div className="chatbot">
          <Chatbot />
        </div>
      )}
    </>
  );
}

export default App;
