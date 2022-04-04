import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { AxiosResponse } from "axios";
import { Season } from "./interface/season.interface";
import { Stage } from "./interface/stage.interface";

const api_key = "qp2bhxccuzty8vuz6w7w6fgr";

@Injectable()
export class FormulaOneService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return "Hello World!";
  }

  async getAllSeasons(): Promise<Stage[]> {
    const { data }: AxiosResponse<Season> = await firstValueFrom(
      this.httpService.get(
        `http://api.sportradar.us/formula1/trial/v2/en/seasons.json?api_key=${api_key}`,
      ),
    );

    if (!data.stages) {
      return [];
    }
    return data.stages;
  }
}
