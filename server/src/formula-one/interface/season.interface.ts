import { Stage } from "./stage.interface";

export interface Season {
  generated_at: string;
  schema: string;
  stages: Stage[];
}
