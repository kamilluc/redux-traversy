import React, { Component } from "react";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={this.state.title} />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea name="body" rows="8" value={this.state.body} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
