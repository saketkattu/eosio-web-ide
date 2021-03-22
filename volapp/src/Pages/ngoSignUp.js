import './ngoSignUp.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ngoSignUp() {

    return(
        <div className="ngoSignUp">
          <h1>Sign Up for Organisations</h1>
          <form>

              <TextField id="Name of Organisation" label="Name" variant="outlined">Name </TextField>
              <TextField id="Email" label="Email" variant="outlined">Email</TextField>
              <TextField id="Phone" label="Phone" variant="outlined">Phone Number</TextField>
              <TextField id="Password" label="Password" variant="outlined">Password</TextField>
          </form>

          <Button variant="contained" color="primary" >Submit</Button>

        
        
        </div>
    )
    
}

export default ngoSignUp;

