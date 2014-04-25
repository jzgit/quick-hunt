export default Em.Component.extend({
  classNames: ['sidebar'],
  tagName: 'span',
  caption: function() {
    return '';
  }.property(),

  // layout supercedes template when rendered
  layout: Ember.Handlebars.compile(
    "{{yield}}"
  ),
});
