import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles'


import BlogEntry from './BlogEntry.jsx';

class App extends Component {

renderPost() {
  let posts = this.props.publications;
	return posts.map((entry) => {
		//const currentUserId = this.props.currentUser && this.props.currentUser._id;
		//const showPrivateButton = task.owner === currentUserId;
  
		return (
		  <BlogEntry
			key={entry._id}
			entry={entry}
		  />
		);
	  });
  }
  
  logOut(){
    Meteor.logout((error)=>{
      if(error){
        console.log(error);
      }
    })
  }

  render() {
    return (
      <div className="container">
       <header>
       { this.props.currentUser ?
            (<button onClick={this.logOut.bind(this)}>
            Log out
          </button>)  : ''
          } 
        </header>
       { this.props.currentUser ?
            <ul>
            {this.renderPost()}
            </ul>  : (<div>Please <Link to="login">Log in</Link> to see the posts</div>)
          } 
          
      </div>
    );
  }
}

export default withTracker(() => {
	Meteor.subscribe('Publications');
    return {
	  publications: Blogs.find({},{}).fetch(),
	  currentUser: Meteor.user(),	
    };
  })(App);
