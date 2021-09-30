import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = (props) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=dc3e90e28df444c985a13bf882cdac7d')
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <Grid item xs={2} sm={4} md={4}>
                            <News article={article}></News>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Newspaper;