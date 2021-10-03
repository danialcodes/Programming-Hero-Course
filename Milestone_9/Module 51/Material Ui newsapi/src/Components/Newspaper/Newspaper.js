import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material'
import { Box } from "@mui/system"
import News from '../News/News';
const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f87e3f3f3c414eb28d4ceb3dbfd1edcb";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, []);
    console.log(articles);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                    </Grid>)
                }
            </Grid>
        </Box>
    )
};

export default Newspaper;