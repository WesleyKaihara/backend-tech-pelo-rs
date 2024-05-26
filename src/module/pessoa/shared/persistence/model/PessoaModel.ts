import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'pessoa',
})
export default class PessoaModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  nome: string;

  @Column
  idade: number;

  @Column
  abrigo: boolean;

  @Column
  endereco: string;

  @Column
  perdeuResidencia: boolean;

  @Column
  realocacao: boolean;

  @Column
  levarFamilia: boolean;

  @Column
  quantidadeAdultos: number;

  @Column
  quantidadeMenores: number;

  @Column
  telefone: string;

  @Column({
    type: DataType.TEXT,
  })
  apresentacao: string;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt: Date;
}
