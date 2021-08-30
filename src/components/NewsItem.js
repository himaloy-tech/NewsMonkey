import React from 'react'

const NewsItem = (props) => {
    let { title, description, ImageSrc, newsUrl, author, date, source} = props;
    return (
        <div>
            <div className="card">
                <img src={ImageSrc} className="card-img-top" alt="thumbnail" style={{
                    height: "179px",
                    objectFit: "cover"
                }} />
                <div className="card-body">
                <span className="badge bg-danger my-3">{source}</span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">- {author ? author : "Unknown"} <br/>- {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
