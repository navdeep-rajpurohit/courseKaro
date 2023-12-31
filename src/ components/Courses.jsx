import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Courses(){
    const [courses, setCourses] = React.useState([]);
    React.useEffect(() => {fetch('http://localhost:3000/courses', {
        method: "GET"
    }).then((res) => {
        res.json().then((data) => {
            setCourses(data);
        })
    })}, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
      }));

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 10 }} justifyContent="center">
                {courses.map((course) => (
                    <CourseGrids key={course._id} course={course}/>
                ))}
            </Grid>
        </Box>
    </>
}

function CourseGrids(props) {
    const navigate = useNavigate();
    let course = props.course;
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
      }));
    return (
        <Grid item key={course._id} >
                    <Item onClick={() => navigate('../course/'+course._id)} sx={{ width: 260, height: 400}} style={{ cursor: 'pointer'}}>   
                        <Box Align="center">
                            <img  style={{height: '15vw',width:'15vw', overflow:'hidden'}} src={course.imageUrl}/>
                        </Box>
                        <Box>
                        <Typography variant="h6">
                        {course.title}
                        </Typography>
                        <Typography variant="body2">
                            {course.instructor}
                        </Typography>
                        <Typography variant="body1">
                            <CurrencyRupeeIcon sx={{ typography: 'body1' }}/>{course.price}
                        </Typography><br/>
                        <Box Align="center">
                            <Button size="small"><ShoppingCartIcon />Buy Course</Button>
                        </Box>
                        </Box>
                    </Item>
                </Grid>
    )
}