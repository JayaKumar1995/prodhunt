export default function () {
  this.namespace = '/api';

  this.get('/products', (schema, request) => {
    return {
      product: schema.products.all()['models']
    };
  });

  this.get('/products/:id', (schema, request) => {
    const { id } = request['params'];
    console.log(schema.products.find(id));
    return {
      product: schema.products.find(id)
    }
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