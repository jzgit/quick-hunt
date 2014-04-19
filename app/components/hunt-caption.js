export default Em.Component.extend({
  classNames: ['caption'],
  tagName: 'p',

  // layout supercedes template when rendered
  layout: Ember.Handlebars.compile(
    "{{caption}}"
  ),
});
