import Oportunidade from "@oportunidade/core/entity/Oportunidade";
import { AdicionarOportunidadeInput } from "@oportunidade/core/useCase/oportunidade/oportunidade.dto";

export interface OportunidadeRepository {
  listarTodasOportunidades(): Promise<Oportunidade[]>;
  adicionarOportunidade(
    input: AdicionarOportunidadeInput
  ): Promise<Oportunidade>;
}
