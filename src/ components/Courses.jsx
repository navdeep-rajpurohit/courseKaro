import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Courses(){
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
    <div id="coursesDiv">
        {courses.map((course) => (
        <div>
        <Card sx={{ width: 275, height: 450}}>
        <CardContent>
            <CardContent>
                <img style={{height: '15vw',width:'15vw', overflow: 'hidden'}} src={course.imageUrl}/>
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
            <Button size="small"><ShoppingCartIcon />Buy Course</Button><br/>
        </CardContent>
        </Card>
    </div>
    )
    )}
    </div>
    </div>
    </>
}
