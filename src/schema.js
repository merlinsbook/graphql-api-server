/**
 * A simple graphql schema.
 * @author [David Tolbert](npm.merlin@gmail.com)
 * @see http://koajs.com/
 * @see http://graphql.org/learn/
 */

// Node Modules
import { makeExecutableSchema } from 'graphql-tools';

// Fake data
import { users, postService } from './database/faker';

// GraphQLSchema
const typeDefs = `
  type Query { 
    users: [User]
  }

  type User { name: String, posts: [Post] }

  type Post { id: String, title: String, content: String }

  schema {
    query: Query
  }
`;
  
// Resolvers
const resolvers = {
  Query: {
    users: () => users,
  },
  User: {
    posts: () => postService.emit({ userId: 1 }),
  },
};

// Put together the schema.
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});