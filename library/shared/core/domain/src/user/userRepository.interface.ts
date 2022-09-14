import { User } from './entity/user.entity';

export abstract class UserRepository {
  abstract authenticate(id: string, password: string): Promise<User>;

  abstract getUserInformation(accessToken: string): Promise<User>;

  abstract updateUserName(accessToken: string, name: string): Promise<User>;

  abstract storeAccessToken(token: string): void;

  abstract getAccessToken(): string;

  abstract removeAccessToken(): void;
}
