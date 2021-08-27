import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dfc513a13c1c4a0883659ff782cc649d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }
    
    previous = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dfc513a13c1c4a0883659ff782cc649d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }
    next = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=dfc513a13c1c4a0883659ff782cc649d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center my-3" style={{
                    textTransform : "capitalize"
                }}>{this.props.category}</h1>
                {this.state.loading && <Spinner />}
                <div className="container my-3">
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4 mt-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 85) : ""} ImageSrc={element.urlToImage ? element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previous}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
