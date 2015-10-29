/**
 * Created by aljonp on 10/28/15.
 */
Template.postForm.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var postName = event.target.title.value;
    var url = event.target.url.value;

    Meteor.call("addPosts", postName, url);

    template.find("form").reset();
  }
});