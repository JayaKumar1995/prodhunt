import Ember from 'ember';

export default Ember.Route.extend({
    async model() {
        const data = this.get('store').findAll('product');
        console.log(data);
        return data;
    }
});
