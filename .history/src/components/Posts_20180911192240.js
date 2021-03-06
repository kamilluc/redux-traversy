import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}
export default Posts;
