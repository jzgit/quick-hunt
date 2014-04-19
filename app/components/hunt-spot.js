export default Em.Component.extend({
  classNames: ['hunt-spot'],
  tagName: 'span',
  xOffset: function() {
    return this.get('xPos') - 26;
  }.property(),
  yOffset: function() {
    return this.get('yPos') - 40;
  }.property(),
  style: function() {
    return [
    'left:' + this.get('xOffset') + 'px',
    'top:' + this.get('yOffset') + 'px',
    'position: absolute;'
    ].join(';');
  }.property('xPos', 'yPost'),

  caption: function() {
    return 'upper lobe';
  }.property(),

  // layout supercedes template when rendered
  layout: Ember.Handlebars.compile(
    "{{yield}}"
  ),
});
