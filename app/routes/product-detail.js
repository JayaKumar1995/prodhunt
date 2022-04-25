import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        const {product_id} = params;
        return product_id;
    }
});
