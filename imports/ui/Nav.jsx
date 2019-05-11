import React, { Component } from 'react';
import Link from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </nav>
      </div>
    );
  }
}

export default Navigation;