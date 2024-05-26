import {
  Body,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import PessoaService from '../shared/service/pessoa.service';
import { AdicionarPessoaInput } from '@pessoa/core/useCase/pessoa/pessoa.dto';

@Controller('/pessoa')
@ApiTags('Pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  async listarPessoa(@Res() response: Response) {
    try {
      const pessoas = await this.pessoaService.listarPessoas();
      return response.json(pessoas);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  @Post()
  async createProduct(
    @Body() input: AdicionarPessoaInput,
    @Res() response: Response,
  ) {
    try {
      const pessoa = await this.pessoaService.adicionarPessoa(input);
      return response.json(pessoa);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
