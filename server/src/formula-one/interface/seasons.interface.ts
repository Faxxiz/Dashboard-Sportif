import { Stage } from "./stage.interface";

export interface Seasons {
  generated_at: string;
  schema: string;
  stages: Stage[];
  message?: string;
}
