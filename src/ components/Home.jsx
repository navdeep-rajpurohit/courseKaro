import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Home(){
    const [courses, setCourses] = React.useState([]);
    React.useEffect(() => {fetch('http://localhost:3000/courses', {
        method: "GET"
    }).then((res) => {
        res.json().then((data) => {
            setCourses(data);
        })
    })}, [])

    return <>
    <div>
    <Typography variant='h4'>
        A broad selection of courses
    </Typography>
    <div id="coursesDiv">
        {courses.map((course) => (
        <div>
        <Card sx={{ minWidth: 275}}>
        <CardContent>
            <Typography variant="h5" component="div">
            {course.title}
            </Typography>
            <CardContent>
                <img style={{height: '20vw',width:'20vw', overflow: 'hidden'}} src='https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg'/>
            </CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {course.description}
            </Typography>
            <Typography variant="body2">
                Instructor: {course.instructor}
            </Typography>
            <Typography variant="body2">
                Price: {course.price}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><ShoppingCartIcon />Buy Course</Button><br/><br/>
        </CardActions>
        </Card>
    </div>
    )
    )}
    </div>
    </div>
    </>
}