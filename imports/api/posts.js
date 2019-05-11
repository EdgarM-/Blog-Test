import { Mongo } from 'meteor/mongo';

export default Blogs = new Mongo.Collection('Publications');

if(Meteor.isServer){

    Meteor.publish('Publications',function(){
        return Blogs.find({},{});
    });

}