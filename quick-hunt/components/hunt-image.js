export default Em.Component.extend({
  clicks: [],
  classNames: [''],
  tagName: 'span',
  allClicks: function() {
    return this.get('clicks');
  }.property('clicks'),

  // layout supercedes template when rendered
  layout: Ember.Handlebars.compile(
    "{{allClicks}}{{yield}}"
  ),

  click: function(evt) {
    this.sendAction('action', evt);
  }
});
