import React from "react";
import Task from "./components/Task";
import Signup from "./components/signup";
import Login from './components/login';
import "./App.css";
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
    return (
      <div className="wrapper">
        <h1>Testing</h1>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Task/>}>
             </Route>
             <Route path="/signup" element={<Signup/>}>
             </Route>
             <Route path="/login" element={<Login/>}>
             </Route>
           </Routes>
         </BrowserRouter> 
      </div>
    );
    
  }
  
  export default App;
  