import { Injectable } from "@nestjs/common";

import { OportunidadeRepository } from "./oportunidade.repository";
import OportunidadeModel from "../model/OportunidadeModel";
import Oportunidade from "@oportunidade/core/entity/Oportunidade";
import { AdicionarOportunidadeInput } from "@oportunidade/core/useCase/oportunidade/oportunidade.dto";

@Injectable()
export class OportunidadeRepositorySequelize implements OportunidadeRepository {
  async listarTodasOportunidades(): Promise<Oportunidade[]> {
    const oportunidades = await OportunidadeModel.findAll();

    return oportunidades.map((oportunidade) =>
      Oportunidade.restore(
        oportunidade.id,
        oportunidade.titulo,
        oportunidade.descricao,
        oportunidade.cidade,
        oportunidade.estado,
        oportunidade.responsavel,
        oportunidade.auxilio,
        oportunidade.telefone,
        oportunidade.email
      )
    );
  }

  async adicionarOportunidade(
    input: AdicionarOportunidadeInput
  ): Promise<Oportunidade> {
    const oportunidade: OportunidadeModel = await OportunidadeModel.create({
      titulo: input.titulo,
      descricao: input.descricao,
      cidade: input.cidade,
      estado: input.estado,
      responsavel: input.responsavel,
      auxilio: input.auxilio,
      telefone: input.telefone,
      email: input.email,
    });

    return Oportunidade.restore(
      oportunidade.id,
      oportunidade.titulo,
      oportunidade.descricao,
      oportunidade.cidade,
      oportunidade.estado,
      oportunidade.responsavel,
      oportunidade.auxilio,
      oportunidade.telefone,
      oportunidade.email
    );
  }
}
