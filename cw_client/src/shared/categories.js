import React, { Component } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';


class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios({ method: 'get', url: 'http://108.129.64.78/wp-json/wp/v2/categories' })
      .then(response => {
        this.setState({categories: response.data})
      })
      .catch(error => console.log(error));
  }
  
  
  
  
  render() {

    let categories = this.state.categories || {}

    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <h4 style={{ textAlign: 'center' }}>Categories</h4>
          <ListGroup variant="flush">
            {categories.map(category => (
              <ListGroup.Item action href="/">
                { category.name }
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    );


  }
    

};

export default Categories;