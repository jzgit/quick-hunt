var Photo = DS.Model.extend({
  comments: DS.hasMany('comment', { async: true })
});

export default photo;
