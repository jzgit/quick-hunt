export default Ember.Route.extend({
  model: function(params) {
    //return ['http://www.proprofs.com/quiz-school/upload/yuiupload/1821978388.jpg'];
    return '/assets/images/hunt.jpg';
    //return this.store.find('spot');
  }
});
