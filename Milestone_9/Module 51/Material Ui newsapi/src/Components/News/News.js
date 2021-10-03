import { Button,Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {title,description,url,urlToImage,content} = props.article;
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={urlToImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    );
};

export default News;