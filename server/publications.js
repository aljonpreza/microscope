/**
 * Created by aljonp on 10/28/15.
 */
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.methods({
  addPosts: function (postName, url) {
    Posts.insert({
      name: postName,
      url: url
    })
  }
});
