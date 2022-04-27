import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        fetchProdInfo: function (id) {
            this.transitionToRoute(`/product-detail/${id}`);
        },
        addProduct: function (name, description) {
            var post = this.get('store').createRecord('product', {
                id: Math.round(Math.random() * 100),
                name,
                description,
                upvotes: Math.round(Math.random() * 100),
                comments: []
            });
            post.save();
        },
        updateVote: function (id) {
            this.get('store').findRecord('product', id).then(function (prod) {
                prod.get('upvotes'); // => "Rails is Omakase"
                prod.set('upvotes', prod.get('upvotes') + 1);
                prod.save(); // => PATCH to '/posts/1'
            });
        }
    }
});
