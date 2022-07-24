export class UserProxy {
  constructor(id: number, name: string, age: number, isGraduate: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isGraduate = isGraduate;
  }
  public id: number;
  public name: string;
  public age: number;
  public isGraduate: boolean;
}
