import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Signup extends Component {

    state = {
        redirect: false,
        checked: false
      }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
          }
    }
    toggleChecked = (event) => {
        console.log(event);
        this.checked = !this.checked;
    }
    handleSubmit(event) {
        event.preventDefault();
    
        // Find the text field via the React ref
        const user = ReactDOM.findDOMNode(this.refs.user).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.pass).value.trim();
        const admin = this.state.checked ? "admin" : "guest";
    
        Accounts.createUser({username:user, password,profile:{role:admin}},  (error)=>{
            if(error){
                this.error = error.reason;
            } else {
                this.setState({
                    redirect: true,
                    checked: false
                })
                this.renderRedirect();
            }
        });
        //Meteor.call('tasks.insert', text);
    
        // Clear form
        ReactDOM.findDOMNode(this.refs.user).value = '';    
        ReactDOM.findDOMNode(this.refs.pass).value = '';
    }

    render() {
        return (
          <div className="container">
            Register
            {this.renderRedirect()}
            <form  onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="user"
                placeholder="Username"
              />
              <br></br>
              <input
                type="password"
                ref="pass"
                placeholder="Password"
              >
              </input>
            <br></br>
              <input
                type="checkbox"
                ref="admin"
                checked={this.checked}
                onClick={this.toggleChecked.bind(this)}
                />Admin
              <button type="submit"> Sign in</button>
            </form>
            { this.error ?
                this.error  : ''
            } 
          </div>
        );
      }
}

export default Signup;