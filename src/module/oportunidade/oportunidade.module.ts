import { Module } from "@nestjs/common";
import OportunidadeService from "./shared/service/oportunidade.service";
import { OportunidadeController } from "./http/oportunidade.controller";
import { OportunidadeRepositorySequelize } from "./shared/persistence";

@Module({
  providers: [OportunidadeService, OportunidadeRepositorySequelize],
  controllers: [OportunidadeController],
})
export class OportunidadeModule {}
