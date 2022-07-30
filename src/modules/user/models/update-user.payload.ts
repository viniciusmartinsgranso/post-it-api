import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateUserPayload {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter no mínimo dois caracteres' })
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'A idade deve ser um número' })
  @IsPositive({ message: 'A idade deve ser um número maior que 0' })
  age: number;
}
