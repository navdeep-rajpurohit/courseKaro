import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Course() {
    let { _id } = useParams();
    const [course, setCourse] = React.useState([]);
    React.useEffect(() => {fetch('http://localhost:3000/course/'+ _id, {
        method: "GET"
    }).then((res) => {
        res.json().then((data) => {
            setCourse(data[0]);
        })
    })}, []);
    return <>
        <Container id="container" fixed>
            <Box sx={{  height: '90vh' }}>
                <Typography variant="h3" display="block" gutterBottom>
                    {course.title}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    {course.description}
                </Typography>
                <Typography variant="subtitle2" display="block" gutterBottom>
                    {course.instructor}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    <CurrencyRupeeIcon />{course.price}
                </Typography>
            </Box>         
            <Box id="courseImgBtn">
                    <Box
                        component="img"
                        sx={{
                            height: 300,
                            width: 300,
                            maxHeight: { xs: 300, md: 300 },
                            maxWidth: { xs: 300, md: 300 },
                        }}
                        alt="Course image"
                        src={course.imageUrl}
                    />
                    <Box>
                    <Button variant="contained">Buy this course</Button>
                    </Box>
                    
                </Box>
        </Container>
    </>
}