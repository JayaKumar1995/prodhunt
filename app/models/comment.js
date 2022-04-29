import DS from 'ember-data';

export default DS.Model.extend({
    productId: DS.belongsTo('product')
});
