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
        <Card style={{ cursor: 'pointer' }} sx={{ width: 275, height: 450}} onClick={() => navigate('./course/'+course._id)}>
        <CardContent>
            <CardContent>
                <img style={{height: '15vw',width:'15vw', overflow:'hidden'}} src={course.imageUrl}/>
            </CardContent>
            <Typography variant="h6">
            {course.title}
            </Typography>
            <Typography variant="body2">
                {course.instructor}
            </Typography>
            <Typography variant="body1">
                <CurrencyRupeeIcon sx={{ typography: 'body1' }}/>{course.price}
            </Typography><br/>
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