import { Module } from "@nestjs/common";
import { PessoaRepositorySequelize } from './shared/persistence';
import PessoaService from './shared/service/pessoa.service';
import { PessoaController } from './http/pessoa.controller';

@Module({
  providers: [PessoaRepositorySequelize, PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
