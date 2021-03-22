import './VolunteerSignUp.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
function VoluntterSignUp() {

    return(
        <div className="VolunteerSignUp">
            <h1>SignUp to be a Volunteer</h1>
          <form>

              <TextField id="Name" label="Name" variant="outlined">Name</TextField>
              <TextField id="Email" label="Email" variant="outlined">Email</TextField>
              <TextField id="Dob" label="Dob" variant="outlined">DOB</TextField>
              <TextField id="Phone" label="Phone" variant="outlined">Phone Number</TextField>
              <TextField id="Password" label="Password" variant="outlined">Password</TextField>
          </form>

          <Button variant="contained" color="primary" >Submit</Button>

        
        
        </div>
    )
    
}

export default VoluntterSignUp;

