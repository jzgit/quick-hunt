var Photo = DS.Model.extend({
  url: DS.attr(),
  filename: DS.attr(),
  mimetype: DS.attr(),
  size: DS.attr()
});

export default photo;
