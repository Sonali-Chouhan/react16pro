import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//import InputSlider from './Component/InputSlider';
//import Slider from "./Component/Slider"
//import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Example from './Context/Example';
//import Flip from './Component/Flip';
function App() {
 
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
      <Example/>
      </DndProvider>
      
     {/* <Router>
    <div className="header">
          <Link to="/">Slider</Link>
           <Link to="/inputslider">Inputslider</Link>
          <Link to="/flip">Flip</Link> 

        </div>
        <Routes>
          <Route path="/" element={<Slider/>} />
          <Route path="/inputslider" element={<InputSlider/>} />
          <Route path="/flip" element={<Flip/>} /> 
        </Routes>
    </Router>  */}

    </div>
  );
}

export default App;
