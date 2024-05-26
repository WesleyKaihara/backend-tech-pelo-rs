import { ApiProperty } from "@nestjs/swagger";

export class AdicionarOportunidadeInput {
  @ApiProperty({
    example: "Operador de máquinas",
  })
  readonly titulo: string;
  @ApiProperty({
    example:
      "Atender aos programas de produção, realizar as trocas de ferramentais, de acordo com as previsões definidas; Fazer as preparações das máquinas dentro das normas (fichas técnicas) e padrões, visando cumprir os prazos; Manter o controle de produção com apontamentos de perdas; Operar máquinas rotuladoras e sopradoras e realizar a inspeção e liberação de materiais e garrafas conforme especificações",
  })
  readonly descricao: string;
  @ApiProperty({
    example: "Campo Mourão",
  })
  readonly cidade: string;
  @ApiProperty({
    example: "PR",
  })
  readonly estado: string;
  @ApiProperty({
    example: "Lucas Santos",
  })
  readonly responsavel: string;
  @ApiProperty({
    example: true,
  })
  readonly auxilio: boolean;
  @ApiProperty({
    example: "(44)91234-5678",
  })
  readonly telefone: string;
  @ApiProperty({
    example: "lucas.santos@email.com",
  })
  readonly email: string;
}
