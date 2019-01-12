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
        return (
            <div>
        <Sidebar />
        <div class="container-articles">
            <div class="row">
                <h1 className="header">Article Thumbnails</h1>
            </div>
            <div class="row learn-row-main">
                <div class="col-md-5 col-lg-5">
                    <div class="featured-article">
                        <a href="#">
                            <img src="http://placehold.it/482x350" alt="" class="thumb"></img>
                        </a>
                        <div class="block-title">
                            <h2>Lorem ipsum dolor asit amet</h2>
                            <p class="by-author"><small>By Jhon Doe</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="featured-article">
                        <a href="#">
                            <img src="http://placehold.it/482x350" alt="" class="thumb"></img>
                        </a>
                        <div class="block-title">
                            <h2>Lorem ipsum dolor asit amet</h2>
                            <p class="by-author"><small>By Jhon Doe</small></p>
                        </div>
                    </div>
                </div>
            </div>
                    <ul class="row media-list main-list">
                        {this.state.articles.map(({author, title, url, urlToImage }) => {
                            return (
                                <li className="col-md-6">
                                    <a className="pull-left" href={url}>
                                        <img className="media-object" src={urlToImage} alt="Article"/>
                                    </a>
                                    <div className="media-body">
                                        <h4 className="media-heading">{title}</h4>
                                        <p className="by-author">{author}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </div>
        )
    }
}

export default Learn