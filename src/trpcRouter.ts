import { createRouter } from './createRouter';
import { brandRoutes } from './routes/brand.routes';

export const serverRouter = createRouter().merge('brand.', brandRoutes);

export type ServerRouter = typeof serverRouter;
