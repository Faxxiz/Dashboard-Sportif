import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { FormulaOneController } from "./formula-one/formula-one.controller";
import { FormulaOneService } from "./formula-one/formula-one.service";

@Module({
  imports: [HttpModule],
  controllers: [FormulaOneController],
  providers: [FormulaOneService],
})
export class AppModule {}
