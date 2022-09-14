import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCommand {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
  }
}
