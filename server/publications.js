/**
 * Created by aljonp on 10/28/15.
 */
Meteor.publish('posts', function() {
  return Posts.find();
});