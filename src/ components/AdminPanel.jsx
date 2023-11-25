import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function AdminPanel() {
    const [courseTitle, setCourseTitle] = useRecoilState("");
    const [instructor, setInstructor] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [email, setEmail] = React.useState(null);

    console.log("Hii from render")

    const addCourse = () => {fetch('http://localhost:3000/addcourse', {
        method: "POST",
        body: JSON.stringify({
            title: courseTitle,
            instructor: instructor,
            description: description,
            imageUrl: imageUrl,
            price: price
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => {
        res.json().then((data) => {
            alert(data);
        })
    })
    }

    const [allCourses, setCourses] = React.useState([]);
    React.useEffect(() => {fetch('http://localhost:3000/courses', {
        method: "GET"
    }).then((res) => {
        res.json().then((data) => {
            setCourses(data);
        })
    })}, [])

    React.useEffect(() => {
        fetch('http://localhost:3000/me', {
           method: "GET",
           headers: {
              "Authorization": "Bearer " + localStorage.getItem('token')
           },
        })
        .then((res) => {
           res.json()
           .then((data) => {
              if(data.email == "admin") {
                 setEmail(data.email);
              }
           })
        })}, [])
    
    if(email){
    return <>
    <div id="adminDiv">
        <div>
            <Card sx={{ minWidth: 475, minHeight: 510}}>
                <CardContent>
                    <Typography variant="h5" >
                    All courses
                    </Typography>
                </CardContent>
                <CardContent>
                <Stack spacing={2}>
                    {allCourses.map((course) => (
                    <Item key={course._id}>
                        {course.title} By {course.instructor}
                        <span id="courseButtons">
                         <Button><EditIcon/> </Button>
                         <Button><DeleteIcon/></Button>
                        </span>
                    </Item>))}
                </Stack>
                </CardContent>
            </Card>
        </div>
        <div></div>
        <div>
            <Card sx={{ minWidth: 475, minHeight: 510 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                Add new course here
                </Typography>
                <CardContent>
                <TextField onChange={(e) => setCourseTitle(e.target.value)} fullWidth={true} id="course-title" label="Course title" variant="outlined" /> <br/><br/>
                <TextField onChange={(e) => setInstructor(e.target.value)} fullWidth={true} id="course-instructor" label="Instructor" variant="outlined" /> <br/><br/>
                <TextField onChange={(e) => setDescription(e.target.value)} fullWidth={true} id="course-desc" label="Description" variant="outlined" /> <br/><br/>
                <TextField onChange={(e) => setImageUrl(e.target.value)} fullWidth={true} id="image" label="Image URL" variant="outlined" /> <br/> <br/>
                <TextField onChange={(e) => setPrice(e.target.value)} fullWidth={true} id="price" label="Price" variant="outlined" /> <br/>
                </CardContent>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={addCourse} fullWidth={true} variant='outlined'>Add course</Button>
            </CardActions>
            </Card>
        </div>
    </div>
    </>
    }
    else {
        return <>
        <div>
            <div>
                <img style={{height: '20vw',width:'20vw', overflow: 'hidden'}} src={"https://previews.123rf.com/images/raccoondaydream/raccoondaydream1611/raccoondaydream161100018/68323058-vectors-abstract-background-403-connection-error-access-denied.jpg"}/>
            </div>
        </div>
        </>
    }
}