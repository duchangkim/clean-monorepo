import { IsNotEmpty, IsString } from 'class-validator';

export class updateUserNameCommand {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
