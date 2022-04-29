export default function (server) {
  window.server = server;
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  let comment1ForProd1 = server.create('comment', {
    id: 1,
    name: 'My first comment'
  })
  let comment2ForProd1 = server.create('comment', {
    id: 2,
    name: 'My Second comment'
  })
  let comment1ForProd2 = server.create('comment', {
    id: 3,
    name: 'My third comment'
  })


  let product1 = server.create('product', {
    id: 1,
    name: 'Slack',
    description: 'Slack is used for colloboration purpose',
    upvotes: 45,
    comments: [1, 3],
    relationships: {
      comments: {
        links: {
          related: 'posts/1/comments'
        }
      }
    }
  })

  let product2 = server.create('product', {
    id: 2,
    name: 'Teams',
    description: 'Teams is used for colloboration purpose',
    upvotes: 15,
    comments: [2],
    relationships: {
      comments: {
        links: {
          related: 'posts/1/comments'
        }
      }
    }
  })

  let product3 = server.create('product', {
    id: 3,
    name: 'Trello',
    description: 'Trello is used mainly for colloboration purpose',
    upvotes: 18,
    comments: [],
    relationships: {
      comments: {
        links: {
          related: 'posts/1/comments'
        }
      }
    }
  })

  // server.createList('product', 10);
}
