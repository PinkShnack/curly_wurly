import React from 'react';
import axios from 'axios';


class BlogPosts extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    axios({ method: 'get', url: 'http://127.0.0.1:8000/BlogPost/' })
      .then(response => {
        this.setState({
          blogPosts: response.data
        })
      })
  }
  
  
  
  
  render() {
    const { blogPosts } = this.state;

    return (
      <div>
        {blogPosts.map(post => (
          <div>
            <h3>{ post.title }</h3>
            <p>By { post.author } on { post.datePosted }</p>
            <p>{ post.content }</p>
          </div>
        ))}
      </div>
    );


  }
    

};

export default BlogPosts;