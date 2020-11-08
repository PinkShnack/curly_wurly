import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardDeck, Col, ListGroup} from 'react-bootstrap'
import black from './black.png'


class BlogCards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios({ method: 'get', url: 'http://108.129.64.78/wp-json/wp/v2/posts' })
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch(error => console.log(error));
  }
  
  
  
  
  render() {

    let posts = this.state.posts || {}

    return (
      <div>
        <CardDeck>
        {posts.map(post => (
          <Col sm={6} style={{ paddingBottom: '24px' }}>
            <Card>
              <Card.Img variant="top" src={black} width="100%" height="180"/>
              <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></Card.Text>
              </Card.Body>
            </Card>
            </Col>
        ))}
        </CardDeck>
      </div>
    );

  }
  
};

export default BlogCards;