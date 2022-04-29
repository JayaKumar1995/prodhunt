import DS from 'ember-data';

export default DS.Model.extend({
    // id: DS.attr('number'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    upvotes: DS.attr('number'),
    comments: DS.hasMany('comment')
    // comments: DS.attr()
});
