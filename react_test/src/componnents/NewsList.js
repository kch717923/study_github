import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                console.log(query)
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9e1ec44a1b4848bda22181d0519f4db2`);
                setArticles(response.data.articles);
            }
            catch(e){
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()
    },[category])

    if(loading){
        return <div className="newslist">대기중...</div>
    }

    if(!articles){
        return null;
    }
    return (
        <div className="newslist">
            {articles.map(article =>{
                return <NewsItem key={article.url} article={article}></NewsItem>
            })}
        </div>
    );
};

export default NewsList;