import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseFrame from "./components/baseFrame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<BaseFrame/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
