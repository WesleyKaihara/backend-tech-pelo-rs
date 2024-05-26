import { ApiProperty } from "@nestjs/swagger";

export class AdicionarPessoaInput {
  @ApiProperty({
    example: "Lucas Silva",
  })
  readonly nome: string;

  @ApiProperty({
    example: 20,
  })
  readonly idade: number;

  @ApiProperty({
    example: true
  })
  readonly abrigo: boolean;

  @ApiProperty({
    example: "Canoas - RS",
  })
  readonly endereco: string;

  @ApiProperty({
    example: true,
  })
  readonly perdeuResidencia: boolean;

  @ApiProperty({
    example: true,
  })
  readonly realocacao: boolean;

  @ApiProperty({
    example: true,
  })
  readonly levarFamilia: boolean;

  @ApiProperty({
    example: 2,
  })
  readonly quantidadeAdultos: number;

  @ApiProperty({
    example: 2,
  })
  readonly quantidadeMenores: number;

  @ApiProperty({
    example: '(44)91234-5678',
  })
  readonly telefone: string;

  @ApiProperty({
    example: 'Antes da enchente trabalhava com serviços gerais como manutenção de ar condicionado, pintura de casas, corte de grama, e outras atividades',
  })
  readonly apresentacao: string;
}
