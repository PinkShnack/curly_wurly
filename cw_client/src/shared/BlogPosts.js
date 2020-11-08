import React, { Component } from 'react';
import axios from 'axios';


class BlogPosts extends Component {

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
        {posts.map(post => (
          <div>
            <h3>{ post.title.rendered }</h3>
            <p>By { post.author } on { post.date }</p>
            <p>{ post.content.rendered }</p>
          </div>
        ))}
      </div>
    );


  }
    

};

export default BlogPosts;