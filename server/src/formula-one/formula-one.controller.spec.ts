import { HttpModule } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";
import { FormulaOneController } from "./formula-one.controller";
import { FormulaOneService } from "./formula-one.service";

describe("FormulaOneController", () => {
  let appController: FormulaOneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [FormulaOneController],
      providers: [FormulaOneService],
    }).compile();

    appController = app.get<FormulaOneController>(FormulaOneController);
  });

  describe("Formula One", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });

    it("should get all seasons reformated", async () => {
      const season = {
        id: "sr:stage:937183",
        description: "Formula 1 2022",
        scheduled: "2022-03-18T12:00:00+00:00",
        scheduled_end: "2022-11-20T15:00:00+00:00",
      };

      const getAllSeasons = await appController.getAllSeasons();
      expect(getAllSeasons).toEqual(
        expect.arrayContaining([expect.any(Object)]),
      );
      expect(getAllSeasons[0]).toEqual(season);
    });

    it("should get a competitor based on an id", async () => {
      const getCompetitor = await appController.getCompetitor(7135);
      expect(getCompetitor).toBeDefined();
    });

    it("should throw an error for a wrong competitor id", async () => {
      const wrongId = 1;
      const wrongCompetitor = appController.getCompetitor(wrongId);

      await expect(wrongCompetitor).rejects.toThrow(
        `Competitor id ${wrongId} not valid for this package.`,
      );
    });
  });
});
