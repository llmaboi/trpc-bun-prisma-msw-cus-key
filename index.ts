// TODO: This should only export things that I want exposed from this package
//   as in TS types, MSW mocks, and TRPC.

import { ServerRouter } from './src/trpcRouter';

export * from './src/mocks';
export type AppRouter = ServerRouter;
