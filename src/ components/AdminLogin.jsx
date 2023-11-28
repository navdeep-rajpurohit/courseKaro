import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const loginUser = () => {fetch('http://localhost:3000/admin', {
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
                setEmail(data.email);
                navigate("/admin/dashboard");
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
                    Welcome to instructor login
                </Typography><br/>
                <TextField fullWidth={true} id="email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/><br/> <br/>
                <TextField fullWidth={true} type='password' id="password" label="Password" variant="outlined"  onChange={(e) => setPassword(e.target.value)} /> <br/> <br/>
                <Button onClick={loginUser} fullWidth={true} variant="outlined">Log in</Button><br/><br/>
            </Card>
        </div>
    </>
}
