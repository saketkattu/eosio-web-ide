import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Pages/VolunteerSignUp'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';


import Login from './Pages/Login';
import VoluntterSignUp from './Pages/VolunteerSignUp';
import ngoSignUp from './Pages/ngoSignUp';
import DonorSignUp from './Pages/DonorSignUp';

ReactDOM.render(
  
    <React.StrictMode>
   {/*  <ngoSignUp />*/}
   {/*<Login/>*/}
   {/*<VoluntterSignUp/>*/}
   {/* <DonorSignUp /> /*/}
    
   <App />
   
   
    
  </React.StrictMode>,
  document.getElementById('root')
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
