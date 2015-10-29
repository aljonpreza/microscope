/**
 * Created by aljonp on 10/28/15.
 */
Template.postForm.events({
  'submit form': function(event, template) {
    event.preventDefault();

    Posts.insert({
      title: event.target.title.value,
      url: event.target.url.value
    });

    template.find("form").reset();
  }
});