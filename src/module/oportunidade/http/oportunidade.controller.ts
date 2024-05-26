import {
  Body,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import OportunidadeService from '../shared/service/oportunidade.service';
import { AdicionarOportunidadeInput } from '@oportunidade/core/useCase/oportunidade/oportunidade.dto';

@Controller('/oportunidade')
@ApiTags('Oportunidade')
export class OportunidadeController {
  constructor(private readonly oportunidadeService: OportunidadeService) {}

  @Get()
  async listarOportunidade(@Res() response: Response) {
    try {
      const oportunidades = await this.oportunidadeService.listarOportunidades();
      return response.json(oportunidades);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  @Post()
  async createProduct(
    @Body() input: AdicionarOportunidadeInput,
    @Res() response: Response,
  ) {
    try {
      const oportunidade = await this.oportunidadeService.adicionarOportunidade(input);
      return response.json(oportunidade);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
