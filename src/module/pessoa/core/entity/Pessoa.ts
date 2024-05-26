export default class Pessoa {
  id?: number;
  nome: string;
  idade: number;
  abrigo: boolean;
  endereco: string;
  perdeuResidencia: boolean;
  realocacao: boolean;
  levarFamilia: boolean;
  quantidadeAdultos: number;
  quantidadeMenores: number;
  telefone: string;
  apresentacao: string;

  static create(   
    nome: string,
    idade: number,
    abrigo: boolean,
    endereco: string,
    perdeuResidencia: boolean,
    realocacao: boolean,
    levarFamilia: boolean,
    quantidadeAdultos: number,
    quantidadeMenores: number,
    telefone: string,
    apresentacao: string,
  ): Pessoa {
    const pessoa = new Pessoa();
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.abrigo = abrigo;
    pessoa.endereco = endereco;
    pessoa.perdeuResidencia = perdeuResidencia;
    pessoa.realocacao = realocacao;
    pessoa.levarFamilia = levarFamilia;
    pessoa.quantidadeAdultos = quantidadeAdultos;
    pessoa.quantidadeMenores = quantidadeMenores;
    pessoa.telefone = telefone;
    pessoa.apresentacao = apresentacao;
    return pessoa;
  }

  static update(
    id: number,
    nome: string,
    idade: number,
    abrigo: boolean,
    endereco: string,
    perdeuResidencia: boolean,
    realocacao: boolean,
    levarFamilia: boolean,
    quantidadeAdultos: number,
    quantidadeMenores: number,
    telefone: string,
    apresentacao: string,
  ): Pessoa {
    const pessoa = new Pessoa();
    pessoa.id = id;
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.abrigo = abrigo;
    pessoa.endereco = endereco;
    pessoa.perdeuResidencia = perdeuResidencia;
    pessoa.realocacao = realocacao;
    pessoa.levarFamilia = levarFamilia;
    pessoa.quantidadeAdultos = quantidadeAdultos;
    pessoa.quantidadeMenores = quantidadeMenores;
    pessoa.telefone = telefone;
    pessoa.apresentacao = apresentacao;
    return pessoa;
  }

  static restore(
    id: number,
    nome: string,
    idade: number,
    abrigo: boolean,
    endereco: string,
    perdeuResidencia: boolean,
    realocacao: boolean,
    levarFamilia: boolean,
    quantidadeAdultos: number,
    quantidadeMenores: number,
    telefone: string,
    apresentacao: string,
  ): Pessoa {
    const pessoa = new Pessoa();
    pessoa.id = id;
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.abrigo = abrigo;
    pessoa.endereco = endereco;
    pessoa.perdeuResidencia = perdeuResidencia;
    pessoa.realocacao = realocacao;
    pessoa.levarFamilia = levarFamilia;
    pessoa.quantidadeAdultos = quantidadeAdultos;
    pessoa.quantidadeMenores = quantidadeMenores;
    pessoa.telefone = telefone;
    pessoa.apresentacao = apresentacao;
    return pessoa;
  }

}
