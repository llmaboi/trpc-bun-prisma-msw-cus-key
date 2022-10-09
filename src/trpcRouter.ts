import { brandRoutes } from './routes/brand.routes';
import { t } from './trpc';

export const serverRouter = t.router({
  brand: brandRoutes,
});

export type ServerRouter = typeof serverRouter;
