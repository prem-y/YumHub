import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Details from "./pages/Details"
import Profile from "./pages/Profile"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
