import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landingpage from "./components/Landingpage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
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
    </>
  );
}

export default App;
