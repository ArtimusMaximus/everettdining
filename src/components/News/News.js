import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsFetch: this.props.news,
            news: [],
        }
    }    

    componentDidMount() {
        // set state to be props incoming
        const url = `https://newsapi.org/v2/${this.state.newsFetch.type}?${this.state.newsFetch.query}&apiKey=bbea9f6cb61342b885010df53dffd4d6`;
    
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((err) => console.log(err))
    }
    
    
    
    
    renderItems() {
        
        // console.log(this.state.newsFetch)
        // console.log(this.props.news)
        return this.state.news.map((item) => (
            <React.Fragment key={item.url}>

                <NewSingle item={item} />
            
            </React.Fragment>
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;