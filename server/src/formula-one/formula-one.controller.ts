import { Controller, Get, HttpException, Param } from "@nestjs/common";
import { FormulaOneService } from "./formula-one.service";
import { Stage } from "./interface/stage.interface";
import { Competitor } from "./interface/competitor";

@Controller()
export class FormulaOneController {
  constructor(private readonly appService: FormulaOneService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/get-all-seasons")
  async getAllSeasons(): Promise<Stage[]> {
    try {
      const getAllSeasons = await this.appService.getAllSeasons();
      return getAllSeasons.stages.map(
        ({ id, description, scheduled, scheduled_end }) => ({
          id,
          description,
          scheduled,
          scheduled_end,
        }),
      );
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get("/get-competitor/:id")
  async getCompetitor(@Param("id") id): Promise<Competitor> {
    try {
      return await this.appService.getCompetitor(id);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
