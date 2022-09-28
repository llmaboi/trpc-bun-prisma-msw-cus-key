import { Prisma } from '@prisma/client';
import { createRouter } from '../createRouter';

// Best practice to only pluck off the select what you want...
const defaultBrandSelect = Prisma.validator<Prisma.BrandSelect>()({
  id: true,
  name: true,
  description: true,
  website: true,
  ceo: true,
  location: true,
  Keyboard: true,
  KeyboardProperty: true,
});

export const brandRoutes = createRouter()
  // query
  .query('getAll', {
    resolve: async ({ ctx }) => {
      // This return logic can be easily be replaced
      //   if in future I don't want prisma...
      return await ctx.prisma.brand.findMany({ select: defaultBrandSelect });
    },
  });
