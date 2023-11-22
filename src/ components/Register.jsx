import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

    return <>
    <div id='box-div'>
    <Card
        component="form"
        style={{m: 1 ,width: 400, padding: 20}}
        noValidate
        autoComplete="off"
    >
        <Typography variant="h6">
            Sign up and start learning
        </Typography><br/>
        <TextField fullWidth={true} id="outlined-basic" label="Full name" variant="outlined" /><br/> <br/>
        <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" /><br/> <br/>
        <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" /> <br/> <br/>
        <Button fullWidth={true} variant="outlined">Sign up</Button><br/><br/>
        <Typography>
        Already have an account? <Link href="" onClick={() => navigate('/login')}>Log in</Link>
        </Typography>
        
    </Card>
</div>
</>
}

export default Register;