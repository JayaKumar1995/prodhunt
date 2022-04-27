import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    id() { return Math.round(Math.random() * 10) },
    name() { return faker.commerce.productName() },
    description() { return faker.lorem.paragraphs(1) },
    upvotes() { return faker.random.number() },
    comments () { return Array.from({length: faker.random.number({min: 1, max: 4 })}).map(ele => faker.lorem.paragraphs(2)) }
});