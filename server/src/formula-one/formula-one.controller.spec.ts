import { HttpModule } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";
import { FormulaOneController } from "./formula-one.controller";
import { FormulaOneService } from "./formula-one.service";

describe("AppController", () => {
  let appController: FormulaOneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [FormulaOneController],
      providers: [FormulaOneService],
    }).compile();

    appController = app.get<FormulaOneController>(FormulaOneController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
