import { app } from './app';
import { ServerRouter } from './trpcRouter';

app.listen(process.env.PORT, () => {
  let message = `🚀 Server ready at: http://localhost::${process.env.PORT}`;
  console.log(message);
});

export * from './mocks';
export type AppRouter = ServerRouter;
