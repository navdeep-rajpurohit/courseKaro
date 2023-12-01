import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import {useSetRecoilState} from "recoil";
import {userState} from "../store/atoms/user.js";

function Login(){
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const setUser = useSetRecoilState(userState);

    const loginUser = () => {fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({
            email: loginEmail,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => {
        res.json().then((data) => {
            if(data.email){
            localStorage.setItem('token', data.token);
            setUser({
                userEmail: loginEmail,
                isLoading: false
            });
            navigate('/');
            }
            else {
                alert(data.message);
            }
        })
    })
}
    return <>
    <Box id="form-div"> 
            <Card
                component="form"
                style={{m: 1 ,width: 400, padding: 20}}
                noValidate
                autoComplete="off"         
            >
                <Typography variant="h6">
                    Log in to your courseKaro account
                </Typography><br/>
                <TextField fullWidth={true} id="email" label="Email" variant="outlined" onChange={(e) => setLoginEmail(e.target.value)}/><br/> <br/>
                <TextField fullWidth={true} type='password' id="password" label="Password" variant="outlined"  onChange={(e) => setPassword(e.target.value)} /> <br/> <br/>
                <Button onClick={loginUser} fullWidth={true} variant="outlined">Log in</Button><br/><br/>
                <Typography>
                    or  <Link href="" onClick={() => navigate('/user/forget-password')}>Forgot Password</Link>
                </Typography>
                <hr/>
                <Typography>
                    Don't have an account? <Link href="" onClick={() => navigate('/user/register')}>Sign up</Link>
                </Typography>
            </Card>
            </Box>
    </>
}

export default Login;