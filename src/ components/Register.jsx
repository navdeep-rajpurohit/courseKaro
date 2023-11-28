import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPasswprd] = React.useState("");
    
    const addUser = () => {fetch('http://localhost:3000/register', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => {
            res.json().then((data) => {
                if(res.status == 201) {
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
            Sign up and start learning
        </Typography><br/>
        <TextField fullWidth={true} onChange={(e) => setName(e.target.value)} id="name" label="Full name" variant="outlined" /><br/> <br/>
        <TextField fullWidth={true} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" variant="outlined" /><br/> <br/>
        <TextField fullWidth={true} type='password' onChange={(e) => setPasswprd(e.target.value)} id="password" label="Password" variant="outlined" /> <br/> <br/>
        <Button fullWidth={true} onClick={addUser} variant="outlined">Sign up</Button><br/><br/>
        <Typography>
        Already have an account? <Link href="" onClick={() => navigate('/user/login')}>Log in</Link>
        </Typography>
        
    </Card>
</div>
</>
}

export default Register;