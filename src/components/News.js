import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from './Footer';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    useEffect( async () => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    };
    return (
        <>
            <div className="container my-3">
                <h1 className="text-center my-3" style={{ textTransform: "capitalize" }}>{props.category}</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4 mt-2" key={element.url}>
                                        <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 85) : ""} ImageSrc={element.urlToImage ? element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
            {articles.length === totalResults && articles.length !== 0 ? <Footer /> : ""}
        </>
    )
}

export default News
