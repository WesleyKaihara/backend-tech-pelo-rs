import { Injectable } from "@nestjs/common";

import Oportunidade from "../../core/entity/Oportunidade";
import { ListarOportunidades } from "@oportunidade/core/useCase";
import { OportunidadeRepositorySequelize } from "../persistence/repository/OportunidadeRepositorySequelize";
import { AdicionarOportunidade } from "@oportunidade/core/useCase/oportunidade/AdicionarOportunidade/AdicionarOportunidade";
import { AdicionarOportunidadeInput } from "@oportunidade/core/useCase/oportunidade/oportunidade.dto";

@Injectable()
export default class OportunidadeService {
  constructor(
    private readonly oportunidadeRepository: OportunidadeRepositorySequelize
  ) {}

  listarOportunidades(): Promise<Oportunidade[]> {
    const listarOportunidades = new ListarOportunidades(
      this.oportunidadeRepository
    );
    return listarOportunidades.execute();
  }

  adicionarOportunidade(
    input: AdicionarOportunidadeInput
  ): Promise<Oportunidade> {
    const listarOportunidades = new AdicionarOportunidade(
      this.oportunidadeRepository
    );
    return listarOportunidades.execute(input);
  }
}
