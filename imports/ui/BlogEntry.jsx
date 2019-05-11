import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Blogs from '../api/posts';

class BlogEntry extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>{this.props.description }</ul>
      </div>
    );
  }
}