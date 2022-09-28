import { app } from './app';

app.listen(process.env.PORT, () => {
  let message = `🚀 Server ready at: http://localhost::${process.env.PORT}`;
  console.log(message);
});
