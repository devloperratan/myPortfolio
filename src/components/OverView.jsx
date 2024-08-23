import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import React from 'react';

function OverView() {
    const overViewItems = [
        { title: 'Web Developer', ImgSrc: './web.png' },
        { title: 'FrontEnd Developer', ImgSrc: './frontend.png' },
        { title: 'BackEnd Developer', ImgSrc: './backend.png' },
        { title: 'FullStack Developer', ImgSrc: './fullStack.png' },
    ];

    return (
        <>
            <div className="intro">
                <h4>Introduction</h4>
                <h1>Overview.</h1>
                <span>
                    <p>I'm a Asst. software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                </span>
            </div>
            <div className='overview'>
                <Grid container spacing={3}>
                    {overViewItems.map((tech, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    maxWidth: 300,
                                    minHeight: 280,
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#151030',
                                    border: '1px solid linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
                                    borderRadius: '30px',
                                    // borderImage: 'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
                                    borderImageSlice: 1,
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s ease-in-out',
                                    }
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="80"
                                        image={tech.ImgSrc}
                                        alt={tech.title}
                                        sx={{ objectFit: 'contain', width: '100%' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={{ color: '#ffffff' }}>
                                            {tech.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default OverView;
