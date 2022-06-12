import React, { Component } from 'react';
import Header from './Header';


class Headerprops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=bbea9f6cb61342b885010df53dffd4d6`;
    
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
        return this.state.news.map((item) => (
            <>
                <Header key={item.url} item={item} />
            </>
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

export default Headerprops;