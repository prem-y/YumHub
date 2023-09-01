import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
