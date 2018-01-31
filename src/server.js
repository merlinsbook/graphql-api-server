/**
 * Server
 * @author [David Tolbert](npm.merlin@gmail.com)
 * @see http://koajs.com/
 * @see http://graphql.org/learn/
 */

 // Node Modules
import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import bodyParser from 'body-parser';
import {  graphiqlKoa, graphqlKoa } from 'apollo-server-koa';

// Graphql Schema
import { schema } from './schema';

// Declarations
export const app = new Koa();
const router = new KoaRouter();

// Middlewares
app.use(compress())
  .use(cors({
    origin: '*'
  }))
  .use(helmet())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

// Routes
router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql',
  }),
);