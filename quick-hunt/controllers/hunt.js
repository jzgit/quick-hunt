export default Ember.ObjectController.extend({
  usedCaptions: [],
  captions: [
    'right common caroid artery',
    'right jugular vein',
    'right subclavian artery',
    'right lung',
    'upper lobe',
    'middle lobe',
    'lower lobe',
    'heart',
    'left atrium',
    'right atrium',
    'left ventricle',
    'right ventricle',
    'right adrenal gland',
    'right kidney',
    'duodenum',
    'right ureter',
    'inferior vena cava',
    'common iliac vein',
    'rectum',
    'external iliac vein',
    'larynx',
    'thyroid gland',
    'trachea',
    'superior vena cava',
    'aorta',
    'left lung',
    'primary bronchus',
    'secondary bronchus',
    'tertiary bronchus',
    'diaphragm',
    'esophagus',
    'spleen',
    'left adrenal gland',
    'pancreas',
    'left kidney',
    'left ureter',
    'abdominal aorta',
    'common iliac artery',
    'internal iliac artery',
    'colon',
    'adipose (fat) tissue'
  ],
  spots: [],
  allSpots: Ember.computed.alias('spots'),
  huntImage: Ember.computed.alias('content'),
  captionCount: Ember.computed.alias('captions.length'),
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  index: 0,
  caption: function() {
    return this.get('captions').objectAt(this.getRandomInt(0, this.get('captionCount') - 1));
  }.property('index'),
  actions: {
    spotClick: function(evt) {
      var spot =  this.store.createRecord('spot', {
        xPos: evt.offsetX,
        yPos: evt.offsetY
      });
      //spot.save();
      this.get('spots').pushObject(spot);
      this.get('usedCaptions').pushObject(this.get('caption'));
      this.incrementProperty('index');
    }
  }
});
