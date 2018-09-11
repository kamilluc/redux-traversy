import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              name="body"
              rows="8"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
