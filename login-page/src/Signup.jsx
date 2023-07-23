import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import './style.css';


function SignUp(){
    return(
      <div className='mainClass'>
        <Card className='card'>
            <h1 className='fontStyle'>Sign in</h1>
            <p className='fontStyle'>Stay updated on your professional world</p>
        <TextField
          label="Email or Phone"
          type="text"
        /><br/>
        <TextField
          label="Password"
          type="password"
        />
        <h4 className='fontStyle' style={{color: '#146bc5'}}>Forgot Password?</h4>
        <br/>
        <Button className='signin-btn' variant="contained">Sign in</Button>  <br/>
        <Divider> or </Divider>      <br/>
        <Button className='signin-btn' variant="outlined">Login with Google</Button>
        </Card> 
        </div>
    )
  }
  
  
  export default SignUp