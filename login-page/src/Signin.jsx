import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


import './style.css';
import { Typography } from '@mui/material';


function Signin(){
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
        <center>
        <Typography variant='h8' className='fontStyle'>New to LinkedIn?  <b style={{ color: '#146bc5'}}>JOIN NOW</b></Typography>
        </center>
        </Card> 
        </div>
    )
  }
  
  
  export default Signin