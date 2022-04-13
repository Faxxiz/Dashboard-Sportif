import { CompetitorInfo } from "./competitor-info";
import { Origin } from "./origin-info";

export interface Competitor {
  generated_at: string;
  schema: string;
  competitor: Origin;
  teams: Origin[];
  info: CompetitorInfo;
}
