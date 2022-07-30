import { ApiProperty } from "@nestjs/swagger";

export class UserProxy {
  constructor(id: number, name: string, age: number, isGraduate: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isGraduate = isGraduate;
  }

  @ApiProperty()
  public id: number;

  @ApiProperty()
  public name: string;

  @ApiProperty()
  public age: number;

  @ApiProperty()
  public isGraduate: boolean;
}
