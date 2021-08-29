import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from './Footer';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        console.log(this.state.articles.length);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dfc513a13c1c4a0883659ff782cc649d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        });
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dfc513a13c1c4a0883659ff782cc649d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1 className="text-center my-3" style={{ textTransform: "capitalize" }}>{this.props.category}</h1>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((element) => {
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
                {this.state.articles.length === this.state.totalResults && this.state.articles.length !== 0 ? <Footer/> : ""}
            </div>
        )
    }
}

export default News
