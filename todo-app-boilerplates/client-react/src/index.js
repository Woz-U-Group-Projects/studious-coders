import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Task from "./components/Task";
import Signup from "./components/signup";
import Login from './components/login';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

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

  ReactDOM.render(<App/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
