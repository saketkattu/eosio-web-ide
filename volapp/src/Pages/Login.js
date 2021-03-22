import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
function Login() {

    return(
        <div className="Login">

        <h1>Login using your Credentials</h1>
        <form className="Login__form" noValidate autoComplete="off">
      
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      
    </form>
    <Button variant="contained" color="primary" className="Login__button">Login</Button>

        </div>
    )
    
}

export default Login;