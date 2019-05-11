import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import { Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';



class Login extends Component {

    state = {
        redirect: false
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
          }
    }

    handleSubmit(event) {
        event.preventDefault();
    
        // Find the text field via the React ref
        const user = ReactDOM.findDOMNode(this.refs.user).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.pass).value.trim();
    
        Meteor.loginWithPassword(user, password, (error)=>{
            if(error){
                this.error = error.reason;
            } else {
                this.setState({
                    redirect: true
                })
                this.renderRedirect();
            }
        })
        //Meteor.call('tasks.insert', text);
    
        // Clear form
        ReactDOM.findDOMNode(this.refs.user).value = '';
        ReactDOM.findDOMNode(this.refs.pass).value = '';
    }

    render() {
        return (
          <div className="container">
            Login
            {this.renderRedirect()}
            <form  onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="user"
                placeholder="Username"
              />
              <input
                type="password"
                ref="pass"
                placeholder="Password"
              >
              </input>
              
              <button type="submit"> Log in</button>
            </form>
            <br></br>
            If you don't have an account,you can register <Link to="/register">Here</Link>
            { this.error ?
                this.error  : ''
            } 
          </div>
        );
      }
}

export default Login;