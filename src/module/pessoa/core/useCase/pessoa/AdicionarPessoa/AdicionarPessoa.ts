import { PessoaRepository } from "@pessoa/shared/persistence";
import { AdicionarPessoaInput } from "../pessoa.dto";
import Pessoa from "@pessoa/core/entity/Pessoa";

export class AdicionarPessoa {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async execute(input: AdicionarPessoaInput): Promise<Pessoa> {
    const pessoa = Pessoa.create(
      input.nome,
      input.idade,
      input.abrigo,
      input.endereco,
      input.perdeuResidencia,
      input.realocacao,
      input.levarFamilia,
      input.quantidadeAdultos,
      input.quantidadeMenores,
      input.telefone,
      input.apresentacao
    );
    await this.pessoaRepository.adicionarPessoa(input);
    return pessoa;
  }
}
