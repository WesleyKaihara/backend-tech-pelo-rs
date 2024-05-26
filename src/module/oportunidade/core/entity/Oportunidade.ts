export default class Oportunidade {
  id?: number;
  titulo: string;
  descricao: string;
  cidade: string;
  estado: string;
  responsavel: string;
  auxilio: boolean;
  telefone: string;
  email: string;

  static create(   
    titulo: string,
    descricao: string,
    cidade: string,
    estado: string,
    responsavel: string,
    auxilio: boolean,
    telefone: string,
    email: string
  ): Oportunidade {
    const oportunidade = new Oportunidade();
    oportunidade.titulo = titulo;
    oportunidade.descricao = descricao;
    oportunidade.cidade = cidade;
    oportunidade.estado = estado;
    oportunidade.responsavel = responsavel;
    oportunidade.auxilio = auxilio;
    oportunidade.telefone = telefone;
    oportunidade.email = email;
    return oportunidade;
  }

  static update(
    id: number,
    titulo: string,
    descricao: string,
    cidade: string,
    estado: string,
    responsavel: string,
    auxilio: boolean,
    telefone: string,
    email: string
  ): Oportunidade {
    const oportunidade = new Oportunidade();
    oportunidade.id = id;
    oportunidade.titulo = titulo;
    oportunidade.descricao = descricao;
    oportunidade.cidade = cidade;
    oportunidade.estado = estado;
    oportunidade.responsavel = responsavel;
    oportunidade.auxilio = auxilio;
    oportunidade.telefone = telefone;
    oportunidade.email = email;
    return oportunidade;
  }

  static restore(
    id: number,
    titulo: string,
    descricao: string,
    cidade: string,
    estado: string,
    responsavel: string,
    auxilio: boolean,
    telefone: string,
    email: string
  ): Oportunidade {
    const oportunidade = new Oportunidade();
    oportunidade.id = id;
    oportunidade.titulo = titulo;
    oportunidade.descricao = descricao;
    oportunidade.cidade = cidade;
    oportunidade.estado = estado;
    oportunidade.responsavel = responsavel;
    oportunidade.auxilio = auxilio;
    oportunidade.telefone = telefone;
    oportunidade.email = email;
    return oportunidade;
  }

}
