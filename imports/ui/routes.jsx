import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from 'react-dom';


import Layout from './Layout.jsx';
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './SignUp.jsx';

Meteor.startup(() => {
    render(
        <Router>
        <Route path="/" component={Layout} />      
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/blog" component={App} />
        <Route path="/blog/:id" component={App} />
        <Route path="/admin/users" component={App} />
        </Router>,
        document.getElementById('react-target')
    )
})