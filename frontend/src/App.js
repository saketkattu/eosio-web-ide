
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
      
    <div className="App">
    
      <h1>Blockchain based Non-Profit Hiring and Fundraising</h1>
      
      <div>
          <Button variant="outlined" color="primary" className="App__login">Login</Button>
      </div>
      <div>
          <Button variant="outlined" color="primary" className="App__signup__doner">Sign up to be a doner</Button>
      </div>
      <div>
          <Button variant="outlined" color="primary" className="App__signup__ngo">Sign up to be a Non Profit Project Sponser</Button>
      </div>
      <div>
          <Button variant="outlined" color="primary" className="App__signup__volun">Sign up to be a volunteer</Button>
      </div>
        
    </div>
  );
}

export default App;
