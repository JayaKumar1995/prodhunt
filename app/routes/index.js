import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const products = [
          {
            id: 1,
            name: 'Slack',
            upvotes: 145,
            comments: []
          },
          {
            id: 2,
            name: 'Outlook',
            upvotes: 459,
            comments: []
          },
        ];
        return products
      }
});
