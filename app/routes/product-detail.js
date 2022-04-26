import Ember from 'ember';

export default Ember.Route.extend({
    // model(params) {
    //     const {product_id} = params;
    //     return product_id;
    // }
    async model(params) {
        const { product_id } = params;
        const data = this.get('store').findRecord('product', product_id);
        console.log("test", data);
        return data;
    }
});
