import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        let { category } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'general' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'business' ? "active" : ""}`} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'entertainment' ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'health' ? "active" : ""}`} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'science' ? "active" : ""}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'sports' ? "active" : ""}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${category === 'technology' ? "active" : ""}`} to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
