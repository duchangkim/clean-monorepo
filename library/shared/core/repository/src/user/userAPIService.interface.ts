import { User } from '@peterpan/shared-core-domain';

export abstract class UserAPIService {
  abstract authenticate(id: string, password: string): Promise<User>;

  abstract getUserInformation(accessToken: string): Promise<User>;

  abstract updateUserName(accessToken: string, name: string): Promise<User>;
}
