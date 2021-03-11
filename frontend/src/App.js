
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <h1>Blockchain based Non-Profit Hiring and Fundraising</h1>
      
      <Button variant="outlined" color="primary" className="App__login">
          Login
      </Button>

      <Button variant="outlined" color="primary" className="App__register">
          Register
      </Button>
    </div>
  );
}

export default App;
