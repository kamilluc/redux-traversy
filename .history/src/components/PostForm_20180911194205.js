import React, { Component } from "react";

class PostForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" />

            <label htmlFor="body">Body:</label>
            <textarea name="body" rows="10" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
