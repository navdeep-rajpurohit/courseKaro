import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Home(){
    const navigate = useNavigate();
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
    <div id="homeDiv">
        {courses.map((course) => (
        <div>
        <Card sx={{ minWidth: 275}}>
        <CardContent>
            <CardContent>
                <img style={{height: '20vw',width:'20vw', overflow: 'hidden'}} src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>
            </CardContent>
            <Typography variant="h6">
            {course.title}
            </Typography>
            <Typography variant="body1">
                {course.instructor}
            </Typography>
            <Typography variant="body1">
                <CurrencyRupeeIcon sx={{ typography: 'body1' }}/>{course.price}
            </Typography><br/>
            <Button fullWidth={true} size="small"><ShoppingCartIcon />Buy Course</Button><br/>
        </CardContent>
        </Card>
    </div>
    )
    )}
    </div>
    <Button size="medium" onClick={() => navigate('./courses')}>Browse all courses</Button><br/>
    </div>
    </>
}