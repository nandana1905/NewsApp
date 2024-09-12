import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('api====>', apiKey);

        let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                
                if (Array.isArray(data.articles)) {
                    setArticles(data.articles);
                } else {
                    console.error('API response does not contain articles array:', data);
                    setArticles([]); 
                }
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setArticles([]); 
            });

    }, [category]);

    return (
        <>
            <div>
                <h2 className="text-center">Latest <span className="badge bg-danger">News</span> </h2>
                {articles.length > 0 ? (
                    articles.map((news, index) => {
                        return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />;
                    })
                ) : (
                    <p>No news articles available.</p>
                )}
            </div>
        </>
    );
};

export default NewsBoard;
