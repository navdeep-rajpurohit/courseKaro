import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';


function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginUser = () => {fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => {
        res.json().then((data) => {
            if(data.email){
            localStorage.setItem('token', data.token);
            window.location = "/";
            }
            else {
                alert(data.message);
            }
        })
    })
}
    return <>
        <div id='box-div'>
            <Card
                component="form"
                style={{m: 1 ,width: 400, padding: 20}}
                noValidate
                autoComplete="off"         
            >
                <Typography variant="h6">
                    Log in to your courseKaro account
                </Typography><br/>
                <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/><br/> <br/>
                <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined"  onChange={(e) => setPassword(e.target.value)} /> <br/> <br/>
                <Button onClick={loginUser} fullWidth={true} variant="outlined">Log in</Button><br/><br/>
                <Typography>
                    or  <Link href="" onClick={() => navigate('/login')}>Forgot Password</Link>
                </Typography>
                <hr/>
                <Typography>
                    Don't have an account? <Link href="" onClick={() => navigate('/register')}>Sign up</Link>
                </Typography>
                

            </Card>
        </div>
    </>
}

export default Login;