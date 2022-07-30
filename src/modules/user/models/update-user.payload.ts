import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class UpdateUserPayload {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter no mínimo dois caracteres' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public role?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'A imagem deve ser uma url' })
  public imageUrl?: string;
}
