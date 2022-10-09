import { faker } from '@faker-js/faker';
import { Brand } from '@prisma/client';

export function brandMock({
  ...opts
}: Brand): Omit<Brand, 'Keyboard' | 'KeyboardProperty'> {
  return {
    id: faker.helpers.unique(() => faker.datatype.number()),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    website: faker.internet.url(),
    ceo: faker.name.fullName(),
    // todo: mock this better
    location: faker.lorem.word(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    // TODO: Mock this after there is a keyboard mock
    // Keyboard: [[
    //   id: faker.datatype.number(),
    //   name: faker.commerce.productName(),
    //   description: faker.commerce.productDescription(),

    // ]],
    // TODO: Mock this after there is a keyboardProperty mock
    // KeyboardProperty: [],
  };
}
