import { Injectable } from "@nestjs/common";
import Pessoa from '@pessoa/core/entity/Pessoa';
import { AdicionarPessoa } from '@pessoa/core/useCase/pessoa/AdicionarPessoa/AdicionarPessoa';
import { ListarPessoas } from '@pessoa/core/useCase/pessoa/ListarPessoas/ListarPessoas';
import { AdicionarPessoaInput } from '@pessoa/core/useCase/pessoa/pessoa.dto';
import { PessoaRepositorySequelize } from '../persistence';


@Injectable()
export default class PessoaService {
  constructor(
    private readonly pessoaRepository: PessoaRepositorySequelize
  ) {}

  listarPessoas(): Promise<Pessoa[]> {
    const listarPessoas = new ListarPessoas(
      this.pessoaRepository
    );
    return listarPessoas.execute();
  }

  adicionarPessoa(
    input: AdicionarPessoaInput
  ): Promise<Pessoa> {
    const adicionarPessoa = new AdicionarPessoa(
      this.pessoaRepository
    );
    return adicionarPessoa.execute(input);
  }
}
