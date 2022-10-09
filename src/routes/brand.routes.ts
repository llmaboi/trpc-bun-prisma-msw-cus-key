import { Prisma } from '@prisma/client';
import { t } from '../trpc';

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

export const brandRoutes = t
  // query
  .router({
    getAll: t.procedure.query(async ({ ctx }) => {
      // This return logic can be easily be replaced
      //   if in future I don't want prisma...
      return await ctx.prisma.brand.findMany({ select: defaultBrandSelect });
    }),
    // getSome: {
    //   resolve: async ({ ctx }) => {
    //     // This return logic can be easily be replaced
    //     //   if in future I don't want prisma...
    //     return await ctx.prisma.brand.findMany({ select: defaultBrandSelect });
    //   },
    // },
  });
