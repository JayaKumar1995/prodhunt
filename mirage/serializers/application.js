import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  namespace: 'api',
//   embed: true,
//   root: true
});