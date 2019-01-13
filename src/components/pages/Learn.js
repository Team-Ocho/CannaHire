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
                <h1 className="header">News in the Cannabis Market</h1>
            </div>
            <div class="row learn-row-main">
            </div>
                    <ul class="row media-list main-list">
                        {this.state.articles.map(({author, title, url, urlToImage }) => {
                            return (
                                <li className="col-md-4">
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