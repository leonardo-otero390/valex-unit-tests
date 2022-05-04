import { jest } from "@jest/globals";
import * as cardService from "../src/services/cardService.js";
import * as cardRepository from "../src/repositories/cardRepository.js";
import * as companyRepository from "../src/repositories/companyRepository.js";
import * as employeeRepository from "../src/repositories/employeeRepository.js";
import * as employeeFactory from "../tests/factories/employeeFactory.js";

describe("create", () => {
  it("should create a card", async () => {
    const apiKey = "12345";
    const employeeId = 1;
    const type = "groceries";
    jest
      .spyOn(companyRepository, "findByApiKey")
      .mockResolvedValue(true as unknown as companyRepository.Company);
    jest
      .spyOn(employeeRepository, "findById")
      .mockResolvedValue(employeeFactory.create());
    jest
      .spyOn(cardRepository, "findByTypeAndEmployeeId")
      .mockResolvedValue(null);
    jest.spyOn(cardRepository, "insert").mockResolvedValue(true as unknown as void);
    await cardService.create(apiKey, employeeId, type);
    expect(cardRepository.insert).toBeCalled();
  });
});
