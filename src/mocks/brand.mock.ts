import { faker } from '@faker-js/faker';
import { Brand } from '@prisma/client';

export function brandMock({ ...opts }: Brand) {
  return {
    id: faker.helpers.unique(() => faker.datatype.number()),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    website: faker.internet.url(),
    ceo: faker.name.fullName(),
    // todo: mock this better
    location: faker.lorem.word(),
    // TODO: Mock this after there is a keyboard mock
    Keyboard: [],
    // TODO: Mock this after there is a keyboardProperty mock
    KeyboardProperty: [],
  };
}
