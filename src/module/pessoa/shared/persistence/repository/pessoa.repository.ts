import Pessoa from '@pessoa/core/entity/Pessoa';
import { AdicionarPessoaInput } from '@pessoa/core/useCase/pessoa/pessoa.dto';

export interface PessoaRepository {
  listarTodasPessoas(): Promise<Pessoa[]>;
  adicionarPessoa(
    input: AdicionarPessoaInput
  ): Promise<Pessoa>;
}
