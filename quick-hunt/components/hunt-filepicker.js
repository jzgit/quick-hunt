export default Ember.Component.extend({
  file: null,
  popUpFilepicker: function(){
    filepicker.setKey('ANT5hHqMR2K4lnuFbhkZ9z');

    filepicker.pickAndStore({mimetype:"image/*", folders:true},{location:"S3"}, function(InkBlobs){
      debugger;
      console.log('file', JSON.stringify(InkBlobs));
    });
  }.on('click'),

  actions: {
    filePick: function (){

    }
  }
});
