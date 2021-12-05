import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import  Task from "./components/Task";
import Signup from "./screens/signup";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const App = () => (
   
      <Router>
      <div>
        <Routes>
      <Route path="/" element={Task} />
      <Route path="/signup" element={Signup} />
      </Routes>
  
      
       
  
      </div>
      </Router>

);
  
  ReactDOM.render(<App/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
