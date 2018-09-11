import React, { Component } from "react";

class PostForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="">Title:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Body:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
