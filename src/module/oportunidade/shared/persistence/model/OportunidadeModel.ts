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
  tableName: 'oportunidade',
})
export default class OportunidadeModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  titulo: string;

  @Column
  descricao: string;

  @Column
  cidade: string;

  @Column
  estado: string;

  @Column
  responsavel: string;

  @Column
  auxilio: boolean;

  @Column
  telefone: string;

  @Column
  email: string;

  @CreatedAt
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updatedAt' })
  updatedAt: Date;
}
