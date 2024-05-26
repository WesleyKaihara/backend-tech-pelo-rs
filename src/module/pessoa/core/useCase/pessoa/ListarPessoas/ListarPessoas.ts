import Pessoa from '@pessoa/core/entity/Pessoa';
import { PessoaRepository } from '@pessoa/shared/persistence';

export class ListarPessoas {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(): Promise<Pessoa[]> {
    const pessoas = await this.pessoaRepository.listarTodasPessoas();
    return pessoas;
  }
}
