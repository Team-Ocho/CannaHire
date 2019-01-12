import React from 'react';
import "../../styles/Learn.css";
import Sidebar from "../Sidebar";
import API from '../../utils/API'

class Learn extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        const blackList = ['engadget', 'mashable', 'bbc-news', 'the-guardian-au']
        API().then(d => {
            d.json().then(({ articles }) => {
                console.log(articles)
                this.setState({ articles: articles.filter(({ source }) => {
                    return !blackList.includes(source.id)
                }) })
            })
        })
    }

    render() {
        return (<div>
            <Sidebar />
            <div className="container-articles">
                <div className="row">
                    <h1 className="header">Article Thumbnails</h1>
                </div>
                <div className="row">
                    <div className="col-md-5 col-lg-5">
                        <div className="featured-article">
                            <a href="#">
                                <img src="http://placehold.it/482x350" alt="" className="thumb"></img>
                            </a>
                            <div className="block-title">
                                <h2>Lorem ipsum dolor asit amet</h2>
                                <p className="by-author"><small>By Jhon Doe</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-7">
                        <ul className="media-list main-list">
                            <li className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x90" alt="..."></img>
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                    <p className="by-author">By Jhon Doe</p>
                                </div>
                            </li>
                            <li className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x90" alt="..."></img>
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                    <p className="by-author">By Jhon Doe</p>
                                </div>
                            </li>
                            <li className="media">
                                <a className="pull-left" href="#">
                                    <img className="media-object" src="http://placehold.it/150x90" alt="..."></img>
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Lorem ipsum dolor asit amet</h4>
                                    <p className="by-author">By Jhon Doe</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <div className="row">
            <div className="leftcolumn">
                {this.state.articles.map(({ author, title, description, publishedAt, url, }) => {
                    return (<div className="card" key={url}>
                    <h2>{title}</h2>
                    {/* <img alt="#" src={this.urlToImage}> {urlToImage}</img> */}
                    <h5>{author}, {publishedAt}</h5>
    
                    <p className="align-right">{description}</p>
                </div>)
                })}
            </div>
        </div>
    </div>)
    }
}

export default Learn