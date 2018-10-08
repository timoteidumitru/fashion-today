import React, { Component } from 'react'
import './kids_content.scss'
import axios from 'axios';


class MenContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    axios.get('./kids.json')
      .then(result => this.setState({
        data: result.data,
        isLoading: false 
      }))
      .catch(error => this.setState({ 
        error, 
        isLoading: false 
      }));
  }

  render() {
    const { data, isLoading, error } = this.state

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div className="products-main">
        <h1 className="products-header" id="hot-items">-----Latest Products-----</h1>
        <hr className="style-eight"/>
        <div className="products-wrapper">
          {data.map(item =>
            <div key={item.id} className="kids">
              <div className="kids-image"></div>
              <span className="kids-detail">{item.name}</span>
              <span className="kids-detail">{item.price}</span>
              <button className="buy-it">Buy It</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default MenContent;