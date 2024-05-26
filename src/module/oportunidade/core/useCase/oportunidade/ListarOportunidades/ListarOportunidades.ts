import { OportunidadeRepository } from '@oportunidade/shared/persistence';
import Product from '../../../entity/Oportunidade';

export class ListarOportunidades {
  constructor(private readonly oportunidadeRepository: OportunidadeRepository) {}

  async execute(): Promise<Product[]> {
    const oportunidades = await this.oportunidadeRepository.listarTodasOportunidades();
    return oportunidades;
  }
}
