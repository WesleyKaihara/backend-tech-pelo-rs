import { Injectable } from "@nestjs/common";

import { PessoaRepository } from "./pessoa.repository";
import PessoaModel from "../model/PessoaModel";
import Pessoa from "@pessoa/core/entity/Pessoa";
import { AdicionarPessoaInput } from "@pessoa/core/useCase/pessoa/pessoa.dto";

@Injectable()
export class PessoaRepositorySequelize implements PessoaRepository {
  async listarTodasPessoas(): Promise<Pessoa[]> {
    const pessoas = await PessoaModel.findAll();

    return pessoas.map((pessoa) =>
      Pessoa.restore(
        pessoa.id,
        pessoa.nome,
        pessoa.idade,
        pessoa.abrigo,
        pessoa.endereco,
        pessoa.perdeuResidencia,
        pessoa.realocacao,
        pessoa.levarFamilia,
        pessoa.quantidadeAdultos,
        pessoa.quantidadeMenores,
        pessoa.telefone,
        pessoa.apresentacao
      )
    );
  }

  async adicionarPessoa(input: AdicionarPessoaInput): Promise<Pessoa> {
    const pessoa: PessoaModel = await PessoaModel.create({
      nome: input.nome,
      idade: input.idade,
      abrigo: input.abrigo,
      endereco: input.endereco,
      perdeuResidencia: input.perdeuResidencia,
      realocacao: input.realocacao,
      levarFamilia: input.levarFamilia,
      quantidadeAdultos: input.quantidadeAdultos,
      quantidadeMenores: input.quantidadeMenores,
      telefone: input.telefone,
      apresentacao: input.apresentacao,
    });

    return Pessoa.restore(
      pessoa.id,
      pessoa.nome,
      pessoa.idade,
      pessoa.abrigo,
      pessoa.endereco,
      pessoa.perdeuResidencia,
      pessoa.realocacao,
      pessoa.levarFamilia,
      pessoa.quantidadeAdultos,
      pessoa.quantidadeMenores,
      pessoa.telefone,
      pessoa.apresentacao
    );
  }
}
