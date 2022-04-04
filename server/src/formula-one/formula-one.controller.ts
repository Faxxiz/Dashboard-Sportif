import { Controller, Get } from "@nestjs/common";
import { FormulaOneService } from "./formula-one.service";
import { Stage } from "./interface/stage.interface";

@Controller()
export class FormulaOneController {
  constructor(private readonly appService: FormulaOneService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/get-all-seasons")
  getAllSeasons(): Promise<Stage[]> {
    return this.appService.getAllSeasons();
  }
}
