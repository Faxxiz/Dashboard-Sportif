import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosResponse } from "axios";
import { Seasons } from "./interface/seasons.interface";
import { Stage } from "./interface/stage.interface";

const api_key = "qp2bhxccuzty8vuz6w7w6fgr";

@Injectable()
export class FormulaOneService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return "Hello World!";
  }

  async getAllSeasons(): Promise<Stage[]> {
    const { data }: AxiosResponse<Seasons> = await firstValueFrom(
      this.httpService
        .get(
          `http://api.sportradar.us/formula1/trial/v2/en/seasons.json?api_key=${api_key}`,
        )
        .pipe(
          catchError((e) => {
            throw new HttpException(e.response.data, e.response.status);
          }),
        ),
    );

    return data.stages.map(({ id, description, scheduled, scheduled_end }) => ({
      id,
      description,
      scheduled,
      scheduled_end,
    }));
  }

  async getCompetitor(id): Promise<any> {
    const { data }: AxiosResponse<any> = await firstValueFrom(
      this.httpService
        .get(
          `http://api.sportradar.us/formula1/trial/v2/en/competitors/sr:competitor:${id}/profile.json?api_key=${api_key}`,
        )
        .pipe(
          catchError((e) => {
            throw new HttpException(e.response.data, e.response.status);
          }),
        ),
    );

    return data;
  }
}
