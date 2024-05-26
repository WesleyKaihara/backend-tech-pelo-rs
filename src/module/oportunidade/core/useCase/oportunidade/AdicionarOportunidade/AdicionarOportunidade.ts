import Oportunidade from "@oportunidade/core/entity/Oportunidade";
import { OportunidadeRepository } from "@oportunidade/shared/persistence";
import { AdicionarOportunidadeInput } from "../oportunidade.dto";

export class AdicionarOportunidade {
  constructor(
    private readonly oportunidadeRepository: OportunidadeRepository
  ) {}

  async execute(input: AdicionarOportunidadeInput): Promise<Oportunidade> {
    const product = Oportunidade.create(
      input.titulo,
      input.descricao,
      input.cidade,
      input.estado,
      input.responsavel,
      input.auxilio,
      input.telefone,
      input.email
    );
    await this.oportunidadeRepository.adicionarOportunidade(input);
    return product;
  }
}
