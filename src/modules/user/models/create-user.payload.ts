import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateUserPayload {
  @ApiProperty()
  @IsDefined({ message: 'A identificação deve ser definida' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'A idade deve ser um número' })
  public id: number;

  @ApiProperty()
  @IsDefined({ message: 'O nome deve ser definido' })
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter no mínimo dois caracteres' })
  public name: string;

  @ApiProperty()
  @IsDefined({ message: 'A idade deve ser definida' })
  @IsPositive({ message: 'A idade deve ser um número maior que 0' })
  public age: number;

  @ApiProperty()
  @IsDefined({ message: 'O estado da graduação deve ser definida' })
  @IsBoolean({ message: 'A graduação deve ser defininida' })
  public isGraduate: boolean;
}
