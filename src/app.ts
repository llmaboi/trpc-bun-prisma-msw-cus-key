import cors from 'cors';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from './context';
import { serverRouter } from './trpcRouter';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: serverRouter,
    createContext,
  })
);
