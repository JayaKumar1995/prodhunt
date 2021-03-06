export default function () {
  this.namespace = '/api';

  this.get('/products', (schema, request) => {
    return {
      product: schema.products.all()['models']
    };
  });

  this.get('/products/:id', (schema, request) => {
    const { id } = request['params'];
    return {
      product: schema.products.find(id)
    }
  });

  this.put('/products/:id', function (schema, request) {
    const { id } = request['params'];
    let attrs = this.normalizedRequestAttrs();
    console.log('sdfasd', attrs);
    schema.products.find(id).update(attrs);
    return {
      product: schema.products.find(id)
    }
  });

  this.post('/products', function({ products }, request) {
    let attrs = this.normalizedRequestAttrs();
    return products.create(attrs);
  });
}


// [
//   {
//     id: 1,
//     name: 'Slack',
//     upvotes: 145,
//     comments: []
//   },
//   {
//     id: 2,
//     name: 'Outlook',
//     upvotes: 459,
//     comments: []
//   },
// ]