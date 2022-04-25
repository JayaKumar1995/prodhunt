import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        fetchProdInfo: function (id) {
            this.transitionToRoute(`/product-detail/${id}`);
        }
    }
});
