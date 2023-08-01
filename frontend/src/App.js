import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
