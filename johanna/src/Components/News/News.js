import React, { Component } from "react";
import NewSingle from './NewSingle';

class News extends Component {
    constructor (props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    compontentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-04&sortBy=publishedAt&apiKey=246b9ea9ce654437acefef97d7e29302"
   
        fetch(url)
        .then((response) => {
        return response.json();
    })
    .then((data) => {
        this.setState({
        news: data.articles   
    })
    })
    .catch((error) => console.log(error));
    }
    renderItems() {
        return this.props.items.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }

 render() {
    return (
      <ul>
        {this.renderItem()}
     </ul>
    );
    }
}

export default News;
