import faker from "@faker-js/faker";

export const create = () => ({
  id: faker.datatype.number(),
  fullName: faker.name.findName(),
  cpf: faker.internet.password(),
  email: faker.internet.email(),
  companyId: faker.datatype.number(),
});
